import React, { useEffect, useState } from "react";

/**
 * GitHubButton component fetches and displays the star count for a specified GitHub repository.
 * It renders a button linking to the repository with the star count shown on the button.
 *
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to display on the button.
 * @param {string} props.username - The GitHub username or organization name.
 * @param {string} props.repository - The name of the GitHub repository.
 * @returns {JSX.Element} The `GitHubButton` component.
 *
 * @example
 * <GitHubButton text="Stars" username="octocat" repository="Hello-World" />
 */
const GitHubButton = ({ text, username, repository, displayIcon = true }) => {
    // State to hold the star count
    const [starCount, setStarCount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // URL for the GitHub API endpoint to get repository details
    const repoUrl = `https://api.github.com/repos/${username}/${repository}`;

    useEffect(() => {
        // Fetch the star count from the GitHub API
        const fetchStarCount = async () => {
            try {
                const response = await fetch(repoUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setStarCount(data.stargazers_count);
            } catch (error) {
                console.error("Error fetching star count:", error);
                setError("Failed to fetch star count");
            } finally {
                setLoading(false);
            }
        };

        fetchStarCount();
    }, [repoUrl]);

    return (
        <a
            href={`https://github.com/${username}/${repository}`}
            className="flex items-center justify-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${username}/${repository} on GitHub`}
        >
            {displayIcon && (
                <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                >
                    <path d="M8 0a8 8 0 00-2.528 15.569c.4.074.548-.173.548-.384 0-.19-.007-.693-.01-1.358-2.228.486-2.698-1.071-2.698-1.071-.365-.926-.892-1.17-.892-1.17-.729-.497.056-.486.056-.486.806.056 1.229.826 1.229.826.716 1.227 1.88.871 2.337.666.072-.52.28-.871.508-1.072-1.772-.202-3.637-.886-3.637-3.945 0-.87.311-1.577.823-2.135-.083-.203-.356-1.025.078-2.13 0 0 .668-.214 2.188.823.637-.177 1.325-.266 2.003-.27.676.004 1.367.091 2.004.27 1.52-1.037 2.188-.823 2.188-.823.436 1.105.162 1.926.079 2.13.512.558.82 1.265.82 2.135 0 3.066-1.868 3.743-3.641 3.936.29.25.549.743.549 1.503 0 1.084-.01 1.961-.01 2.224 0 .212.148.462.553.384A8.003 8.003 0 008 0z" />
                </svg>
            )}
            {text}
            {/* {loading ? (
                <span className="ml-2 animate-pulse">Loading...</span>
            ) : error ? (
                <span className="ml-2 text-red-500" title={error}>
                    {error}
                </span>
            ) : (
                <span className="ml-2">
                    {starCount.toLocaleString()}
                </span>
            )} */}
        </a>
    );
};

export default GitHubButton;
