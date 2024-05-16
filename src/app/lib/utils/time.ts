import { addMinutes, getTime, parse } from "date-fns";


export const formatDate = ({ date, time }) => {
    const parseDate = parse(date, 'yyyy-MM-dd', new Date());
    const parseTime = parse(time, 'HH:mm', new Date());

    // Agregar la hora y minutos al objeto de fecha
    const fechaYHora = addMinutes(
        new Date(parseDate.getFullYear(), parseDate.getMonth(), parseDate.getDate(), parseTime.getHours(), parseTime.getMinutes()),
        parseTime.getMinutes()
    );

    // Obtener el timestamp Unix
    const timestamp = Math.floor(getTime(fechaYHora) / 1000);
    return timestamp;
}