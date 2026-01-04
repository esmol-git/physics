import './footer.scss'

// Установка текущего года в копирайт
function setCopyrightYear() {
	const yearElement = document.querySelector('.footer__copyright-year')
	if (yearElement) {
		yearElement.textContent = new Date().getFullYear()
	}
}

// Инициализация при загрузке DOM
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', setCopyrightYear)
} else {
	setCopyrightYear()
}