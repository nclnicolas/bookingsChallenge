
export function formatDate(dateString: string) {
    const months = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    const [year, month, day] = dateString.split("-");
    console.log('year:', year);
    const monthName = months[parseInt(month, 10) - 1];
    return `${parseInt(day, 10)} de ${monthName}`;
}