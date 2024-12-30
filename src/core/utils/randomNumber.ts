/**
 * Genera un número aleatorio entre un rango dado.
 * @param min - Límite inferior (incluido).
 * @param max - Límite superior (excluido).
 * @returns Un número aleatorio entre min (incluido) y max (excluido).
 */
export function getRandomNumber(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min) + min * 100)
}
