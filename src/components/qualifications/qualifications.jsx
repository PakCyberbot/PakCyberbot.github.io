import React, { useState, useEffect } from 'react';
import "./qualifications.css";
import { 
  FaShieldAlt, 
  FaNetworkWired, 
  FaServer, 
  FaCode, 
  FaTools, 
  FaGraduationCap,
  FaExternalLinkAlt,
  FaEye,
  FaDownload,
  FaCertificate,
  FaAward,
  FaStar,
  FaSearch,
  FaTimes
} from 'react-icons/fa';

const importImages = (category) => {
  const images = [];
  try {
    const imageContext = require.context(`../props/certs/`, true, /\.(png|jpg|jpeg|gif|svg|pdf)$/);
  imageContext.keys().forEach((imagePath) => {
    if (imagePath.includes(category)) {
        const imageName = imagePath.split('/').pop().replace(/\.\w+$/, '').replace(/^\d+_/, '');
      const importedImage = imageContext(imagePath);
        images.push({ img: importedImage, name: imageName, path: imagePath });
    }
  });
  } catch (error) {
    console.log('No certificates found for category:', category);
  }
  return images;
};

const getCategoryIcon = (category) => {
  const icons = {
    'CTF': FaShieldAlt,
    'CyberSecurity': FaNetworkWired,
    'Exams': FaServer,
    'GeneralIT': FaTools,
    'Others': FaGraduationCap,
    'Programming': FaCode,
    'default': FaCertificate
  };
  return icons[category] || icons.default;
};

const getCategoryDescription = (category) => {
  const descriptions = {
    'CTF': 'Capture The Flag challenges and competitions',
    'CyberSecurity': 'Security certifications and training',
    'Exams': 'Professional certification exams',
    'GeneralIT': 'General IT and technology skills',
    'Others': 'Additional skills and achievements',
    'Programming': 'Programming and development skills',
    'default': 'Professional certifications'
  };
  return descriptions[category] || descriptions.default;
};

const Qualifications = ({ viewType }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [hoveredCert, setHoveredCert] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCerts, setFilteredCerts] = useState([]);

  const certificates = importImages(viewType);

  useEffect(() => {
    setFilteredCerts(certificates);
  }, [certificates]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term === '') {
      setFilteredCerts(certificates);
    } else {
      const filtered = certificates.filter(cert => 
        cert.name.toLowerCase().includes(term)
      );
      setFilteredCerts(filtered);
    }
  };

  const openCertificate = (cert) => {
    setSelectedCert(cert);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedCert(null);
  };

  const CategoryIcon = getCategoryIcon(viewType);
  const categoryDescription = getCategoryDescription(viewType);

  return (
        <div className="qualifications-container">
      {/* Header Section */}
      <div className="certs-header">
        <div className="header-content">
          <div className="category-info">
            <div className="category-icon-wrapper">
              <CategoryIcon className="category-icon" />
              <div className="icon-glow"></div>
            </div>
            <div className="category-details">
              <h1 className="category-title">{viewType.toUpperCase()}</h1>
              <p className="category-description">{categoryDescription}</p>
              <div className="cert-count">
                <FaCertificate className="count-icon" />
                <span>{filteredCerts.length} Certificates</span>
              </div>
            </div>
          </div>
          
          <div className="search-section">
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search certificates..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
              />
              <div className="search-glow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="certs-grid">
        {filteredCerts.length > 0 ? (
          filteredCerts.map((cert, index) => (
            <div 
              className={`cert-card ${hoveredCert === index ? 'hovered' : ''}`}
              key={index}
              onMouseEnter={() => setHoveredCert(index)}
              onMouseLeave={() => setHoveredCert(null)}
              onClick={() => openCertificate(cert)}
            >
              <div className="cert-image-container">
                <img src={cert.img} alt={cert.name} className="cert-image" />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <FaEye className="view-icon" />
                    <span>View Certificate</span>
                  </div>
                </div>
                <div className="cert-badge">
                  <FaAward className="badge-icon" />
                </div>
          </div>
              
              <div className="cert-info">
                <h3 className="cert-name">{cert.name}</h3>
                <div className="cert-meta">
                  <span className="cert-category">{viewType}</span>
                  <div className="cert-rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
        ))}
      </div>
                </div>
              </div>
              
              <div className="cert-actions">
                <button className="action-btn view-btn">
                  <FaEye />
                  <span>View</span>
                </button>
                <button className="action-btn download-btn">
                  <FaDownload />
                  <span>Download</span>
                </button>
              </div>
              
              <div className="cert-glow"></div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <FaCertificate className="no-results-icon" />
            <h3>No certificates found</h3>
            <p>Try adjusting your search terms</p>
          </div>
        )}
      </div>

      {/* Certificate Popup */}
      {isPopupOpen && selectedCert && (
        <div className="cert-popup-overlay" onClick={closePopup}>
          <div className="cert-popup" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h2>{selectedCert.name}</h2>
              <button className="close-btn" onClick={closePopup}>
                <FaTimes />
              </button>
            </div>
            
            <div className="popup-content">
              <div className="popup-image">
                <img src={selectedCert.img} alt={selectedCert.name} />
              </div>
              
              <div className="popup-details">
                <div className="detail-item">
                  <FaCertificate className="detail-icon" />
                  <span className="detail-label">Category:</span>
                  <span className="detail-value">{viewType}</span>
                </div>
                
                <div className="detail-item">
                  <FaAward className="detail-icon" />
                  <span className="detail-label">Type:</span>
                  <span className="detail-value">Professional Certification</span>
                </div>
                
                <div className="detail-item">
                  <FaStar className="detail-icon" />
                  <span className="detail-label">Rating:</span>
                  <span className="detail-value">5.0/5.0</span>
                </div>
              </div>
            </div>
            
            <div className="popup-actions">
              <button className="popup-btn primary">
                <FaExternalLinkAlt />
                <span>Open Full Size</span>
              </button>
              <button className="popup-btn secondary">
                <FaDownload />
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Qualifications;
