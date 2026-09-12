---
title: "OSCP: my initial enumeration checklist"
date: 2026-08-20
category: "OSCP Notes"
tags: ["oscp", "enumeration", "methodology", "nmap"]
summary: "The exact steps I run in the first ten minutes against a fresh box — ports, services, web, and the notes discipline that actually wins the exam."
draft: false
---

Enumeration is where the exam is won or lost. The goal of the first ten minutes
is not to exploit anything — it is to build a map so I never sit staring at a
blank terminal wondering what to try next.

## Port discovery

Start wide, then go deep on what is open.

```bash
# fast full-port sweep
nmap -p- --min-rate 2000 -T4 -oA scans/all-ports $TARGET

# deep scan on the open ports only
ports=$(grep -oP '\d+(?=/open)' scans/all-ports.nmap | paste -sd,)
nmap -sCV -p$ports -oA scans/deep $TARGET
```

> [!TIP]
> Save everything with `-oA`. When you write the report at 2am, you will thank
> yourself for having the raw output already on disk.

## Service-by-service

For each open service I open a note file and record findings as I go.

### Web (80/443/8080)

```bash
whatweb http://$TARGET
feroxbuster -u http://$TARGET -w /usr/share/seclists/Discovery/Web-Content/raccoon.txt -x php,txt,html
```

Look for: version banners, default creds, exposed `.git`, admin panels, upload
forms, and anything that echoes input back.

### SMB (139/445)

```bash
netexec smb $TARGET -u '' -p '' --shares
```

> [!WARNING]
> Null-session share listing is noisy but harmless. Do not run exploit modules
> blindly on the exam — understand the box first.

## The notes discipline

I keep one file per host with a fixed skeleton:

```markdown
# 10.10.10.x — hostname
## Ports
## Web
## Creds found
## Foothold
## Privesc
## Proof
```

This turns the report into a copy-paste job instead of a memory test.

## Quick privesc triage

Once I have a shell, the first checks are always the same:

```powershell
# Windows
whoami /priv
systeminfo | findstr /B /C:"OS Name" /C:"OS Version"
```

```bash
# Linux
id; sudo -l 2>/dev/null
find / -perm -4000 -type f 2>/dev/null
```

That is the loop: enumerate, note, exploit, escalate, prove — then move on.
Full environment setup lives in my
[OSCP Notes & Environment](https://pakcyberbot.com/OSCP-Notes-and-Environment/) repo.
