import React from 'react'
import { FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => (
    <div className=''>
        <div>
            <FaInstagramSquare />
            <FaTwitterSquare />
            <FaLinkedin />
            <FaGithubSquare />
        </div>
        <div className='text-gray-700 text-center h-14'>Copyright © 2023 Kundan Patel. All Rights Reserved.</div>
    </div>
)

export default Footer