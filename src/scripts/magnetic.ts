export function initMagnetic() {
    const magneticItems = document.querySelectorAll('.magnetic-target');

    magneticItems.forEach(item => {
        item.addEventListener('mousemove', (e: Event) => {
            const mouseEvent = e as MouseEvent;
            const target = mouseEvent.currentTarget as HTMLElement;
            const rect = target.getBoundingClientRect();
            const x = mouseEvent.clientX - rect.left - rect.width / 2;
            const y = mouseEvent.clientY - rect.top - rect.height / 2;
            const strength = 0.2;
            (item as HTMLElement).style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        });

        item.addEventListener('mouseleave', () => {
            (item as HTMLElement).style.transform = 'translate(0px, 0px)';
        });
    });
}
