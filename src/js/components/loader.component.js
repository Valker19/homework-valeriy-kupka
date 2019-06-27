export class LoaderComponent {
    setContainer(container, settings = {style:''}) {
        this.container = container;
        this._customStyle = settings.style;
    }

    setLoader() {
        this.container.innerHTML = `
            <style>
                ${this.style()}
                ${this._customStyle}
            </style>
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        `;
    }

    removeLoader() {
        this.container.innerHTML = '';
    }

    style() {
        return `
            .lds-ellipsis {
                position: relative;
                width: 31px;
                height: 31px;
                transform: translateX(-100%);
            }
            .lds-ellipsis div {
                position: absolute;
                top: 10px;
                width: 11px;
                height: 11px;
                border-radius: 50%;
                background: #cef;
                animation-timing-function: cubic-bezier(0, 1, 1, 0);
            }
            .lds-ellipsis div:nth-child(1) {
                left: 6px;
                animation: lds-ellipsis1 0.6s infinite;
            }
            .lds-ellipsis div:nth-child(2) {
                left: 6px;
                animation: lds-ellipsis2 0.6s infinite;
            }
            .lds-ellipsis div:nth-child(3) {
                left: 26px;
                animation: lds-ellipsis2 0.6s infinite;
            }
            .lds-ellipsis div:nth-child(4) {
                left: 45px;
                animation: lds-ellipsis3 0.6s infinite;
            }
            @keyframes lds-ellipsis1 {
                0% {
                    transform: scale(0);
                }
                100% {
                    transform: scale(1);
                }
            }
            @keyframes lds-ellipsis3 {
                0% {
                    transform: scale(1);
                }
                100% {
                    transform: scale(0);
                }
            }
            @keyframes lds-ellipsis2 {
                0% {
                    transform: translate(0, 0);
                }
                100% {
                    transform: translate(19px, 0);
                }
            }
        `;
    }
}