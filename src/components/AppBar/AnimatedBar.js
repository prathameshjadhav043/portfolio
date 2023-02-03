import { motion } from "framer-motion";
import React from "react";

function AnimatedBar() {
    return (
        <nav>
            <ul>
                <li>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                    >
                        Home
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                    >
                        About
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                    >
                        Contact
                    </motion.a>
                </li>
            </ul>
        </nav>
    )
}

export default AnimatedBar;


