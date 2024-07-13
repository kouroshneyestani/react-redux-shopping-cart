import React from "react";
import { Link } from "react-router-dom"; // Adjust based on your routing library

/**
 * Breadcrumb component for navigation within the site hierarchy.
 * @param {Object} props - The component properties.
 * @param {Array} props.items - Array of breadcrumb items.
 * @returns {JSX.Element} - The Breadcrumb component.
 */
const Breadcrumb = ({ items }) => {
    return (
        <nav aria-label="breadcrumb" className="uppercase text-xs mb-4">
            <ol className="flex items-center">
                {items.map((item, index) => (
                    <React.Fragment key={item.label}>
                        {index > 0 && <li className="text-gray-400 mx-2">/</li>}
                        {item.link ? (
                            <li>
                                <Link to={item.link}>{item.label}</Link>
                            </li>
                        ) : (
                            <li>{item.label}</li>
                        )}
                    </React.Fragment>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
