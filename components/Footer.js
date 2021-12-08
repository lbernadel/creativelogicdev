import React from "react";
import { MdCopyright } from "react-icons/md"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
            <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
                <div className="flex flex-col justify-between lg:flex-row items-center">
                    <span><MdCopyright/>2021 Creative Logic Dev</span>
                    <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                        <a 
                            href="https://www.linkedin.com/in/lauriebernadel/"
                            title="LinkedIn Profile"
                            className="transition-colors hover:text-purple-300"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                        <a 
                            href="https://github.com/lbernadel"
                            title="GitHub Profile"
                            className="transition-colors hover:text-purple-300"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;