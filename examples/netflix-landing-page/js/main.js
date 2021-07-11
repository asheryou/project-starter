const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// 函数
function selectItem(e) {
	removeBorder();
	removeShow();
	// 加下划线
	this.classList.add('tab-border');
	// 显示tab-{id}-content
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	tabContentItem.classList.add('show');
}

function removeBorder() {
	tabItems.forEach((item) => item.classList.remove('tab-border'));
}

function removeShow() {
	tabContentItems.forEach((item) => item.classList.remove('show'));
}

// 监听器
tabItems.forEach((item) => item.addEventListener('click', selectItem));
