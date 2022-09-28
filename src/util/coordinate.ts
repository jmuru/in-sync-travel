
const getCoordinate = (element: HTMLDivElement | null): number => {
    let offset: number;
    let bodyRect = document.body.getBoundingClientRect();
    if (element == null) {
        return bodyRect.top;
    }
    let rect: DOMRect | undefined = element?.getBoundingClientRect();
    if (rect?.top) {
        offset = rect?.top - bodyRect.top;
    } else {
        offset = 0;
    }

    return offset;
}

function getDocHeight(): number {
    let D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}

function amountscrolled(): boolean {
    let winheight = window.innerHeight || (document.documentElement || document.body).clientHeight
    let docheight = getDocHeight()
    let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    let trackLength = docheight - winheight
    let pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    console.log(pctScrolled + '% scrolled')
    if (pctScrolled >= 20) {
        return true
    }
    return false;
}

function stopPageScroll(): void {
    document.body.style.overflowY = 'hidden';
    document.body.style.top = `-${window.scrollY}px`;
}

/*
picks up page scroll from last stopped location
*/
function resumePageScroll(): void {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = ``;
    document.body.style.overflowY = 'auto';
    window.scrollBy(0, parseInt(scrollY || '0') * -1);
}

export {
    getCoordinate,
    amountscrolled,
    stopPageScroll,
    resumePageScroll
}