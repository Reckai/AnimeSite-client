export function generateColorFromString(str: string) {
	// Шаг 1: Создаем хеш из строки
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
	}

	// Шаг 2: Преобразуем хеш в цвет
	let color = '#';
	for (let i = 0; i < 3; i++) {
		const value = (hash >> (i * 8)) & 0xff;
		color += ('00' + value.toString(16)).substr(-2);
	}

	return color;
}
