import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable Card component
 * @param {string} title - Card title
 * @param {string | React.ReactNode} content - Card content body
 * @param {React.ReactNode} footer - Optional footer section
 * @param {string} className - Optional Tailwind CSS class overrides
 * @returns {JSX.Element}
 */
const Card = ({ title, content, footer, className = '' }) => {
  const titleId = title ? `${title.toLowerCase().replace(/\s+/g, '-')}-title` : undefined;

  return (
    <div
      role="article"
      aria-labelledby={titleId}
      className={`border p-4 rounded-lg bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 shadow hover:scale-105 hover:shadow-lg transition-transform duration-300 ${className}`}
    >
      {title && <h3 id={titleId} className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>}
      <div className="text-gray-800 dark:text-gray-100 whitespace-pre-line">{content}</div>
      {footer && <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  footer: PropTypes.node,
  className: PropTypes.string,
};

export default Card;
