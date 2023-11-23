export const formatDate = (str) => {
    const date = new Date(str);

    const formatter = new Intl.DateTimeFormat('ru-RU', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
    return formatter.format(date);
};

export const convertDuration = (duration) => {
    const hours = duration.match(/(\d+)H/) ? parseInt(duration.match(/(\d+)H/)[1]) : 0;
    const minutes = duration.match(/(\d+)M/) ? parseInt(duration.match(/(\d+)M/)[1]) : 0;
    const seconds = duration.match(/(\d+)S/) ? parseInt(duration.match(/(\d+)S/)[1]) : 0;

    let stroke = '';

    if (hours > 0) {
        stroke += `${hours} ч `;
    }
    if (minutes > 0) {
        stroke += `${minutes} мин `;
    }
    if (seconds > 0) {
        stroke += `${seconds} сек `;
    }

    return stroke.trim();
};
