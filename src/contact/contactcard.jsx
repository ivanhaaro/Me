import React from 'react'
import './contactcard.css'

export function ContactCard() { return (
    <section className='contact-card-section'>
        <GithubIcon/>
        <LinkedInIcon/>
        <MailIcon/>
    </section>
)}

const GithubIcon = () => { return (
    <a href="https://github.com/ivanhaaro/" target="_blank">
        <svg height="50" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="50" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>
    </a>
)}

const LinkedInIcon = () => { return (
    <a href="https://www.linkedin.com/in/ivanharo/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
        </svg>
    </a>
)}

const MailIcon = () => { return (
    <a href="mailto:ivanharoliminana@gmail.com" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="50" height="50" viewBox="0 0 20 20">
            <path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM6.231 7h7.52c.399 0 .193.512-.024.643-.217.13-3.22 1.947-3.333 2.014s-.257.1-.403.1a.793.793 0 0 1-.402-.1L6.255 7.643C6.038 7.512 5.833 7 6.231 7zM14 12.5c0 .21-.252.5-.444.5H6.444C6.252 13 6 12.71 6 12.5V8.853c0-.092-.002-.211.172-.11l3.417 2.015a.69.69 0 0 0 .402.1c.146 0 .252-.011.403-.1l3.434-2.014c.174-.102.172.018.172.11V12.5z"/>
        </svg>
    </a>
)}