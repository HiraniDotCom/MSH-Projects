import { useEffect } from 'react';

/**
 * Custom hook that listens for a specific keyboard key press globally.
 * @param {string} targetKey - The key to listen for (e.g., 'Escape')
 * @param {Function} callback - The function to run when the key is pressed
 */
export const useKeyPress = (targetKey, callback) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === targetKey) {
                callback();
            }
        };

        // Attach global window listener
        window.addEventListener('keydown', handleKeyDown);

        // Automatically clean up when component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [targetKey, callback]); // Re-runs cleanly if targetKey or callback updates
};
