import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './style.css';
import WebContent from './app';

ReactDOM.render(<WebContent />, document.getElementById('root'));

const toggle = document.querySelector('.hover-show');
if (toggle) {

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
  });

  let Icons = document.querySelectorAll('.navigation .icon');

  Icons.forEach((icon) => {
    icon.addEventListener('click', () => {
      changeactive();
      icon.classList.add('active-nav');
    });
  });

  function changeactive() {
    Icons.forEach((icon) => {
      icon.classList.remove('active-nav');
    });
  }
}