
const turnoElement = document.getElementById("numeroturno") as HTMLElement | null;
if (!turnoElement) {
    throw new Error("El elemento con id 'numeroturno' no existe en el DOM");
}


let numeroturno: number = parseInt(turnoElement.textContent ?? "0", 10);

// Función para asegurar que turnoElement no es null
function getTurnoElement(): HTMLElement {
    if (!turnoElement) {
        throw new Error("El elemento con id 'numeroturno' no existe en el DOM");
    }
    return turnoElement;
}

// Función para pasar turno
function next(): void {
    numeroturno++;
    const siguiente: string = numeroturno.toString().padStart(2, '0');
    getTurnoElement().textContent = siguiente;
}

// Botón para pasar al siguiente turno
const pasarturno = document.getElementById("siguiente") as HTMLElement | null;
if (!pasarturno) {
    throw new Error("El elemento con id 'siguiente' no existe en el DOM");
}
pasarturno.addEventListener("click", next);

// Función para turno anterior
function back(): void {
    numeroturno--;
    const anterior: string = numeroturno.toString().padStart(2, '0');
    getTurnoElement().textContent = anterior;
}

// Botón para retroceder el turno
const turnoanterior = document.getElementById("anterior") as HTMLElement | null;
if (!turnoanterior) {
    throw new Error("El elemento con id 'anterior' no existe en el DOM");
}
turnoanterior.addEventListener("click", back);

// Función para reiniciar turno
function reset(): void {
    numeroturno = 0;
    getTurnoElement().textContent = numeroturno.toString().padStart(2, '0');
}

// Botón para reiniciar el turno
const turno0 = document.getElementById("reinicio") as HTMLElement | null;
if (!turno0) {
    throw new Error("El elemento con id 'reinicio' no existe en el DOM");
}
turno0.addEventListener("click", reset);

// Función turno manual
function turnomanual(): void {
    const inputElement = document.getElementById("turnomanual") as HTMLInputElement | null;
    if (!inputElement) {
        throw new Error("El elemento con id 'turnomanual' no existe en el DOM");
    }

    const elegirturno = inputElement.value;
    const turnomanual = parseInt(elegirturno, 10);

    if (isNaN(turnomanual)) {
        throw new Error("El valor introducido no es un número válido");
    }

    numeroturno = turnomanual;
    getTurnoElement().textContent = numeroturno.toString().padStart(2, '0');
}

// Botón turno manual
const turnoelegido = document.getElementById("manual") as HTMLElement | null;
if (!turnoelegido) {
    throw new Error("El elemento con id 'manual' no existe en el DOM");
}
turnoelegido.addEventListener("click", turnomanual);
