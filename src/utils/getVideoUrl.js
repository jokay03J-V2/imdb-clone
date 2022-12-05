export function getVideoUrl(key, provider) {
    switch (provider) {
        case "YouTube":
            return `https://youtube.com/embed/${key}`;
            break;
    
        case "Vimeo":
            return `https://player.vimeo.com/video/${key}`
            break;
    }
}