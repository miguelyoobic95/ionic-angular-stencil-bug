/*! Built with http://stenciljs.com */
const { h } = window.DesignSystem;

import { a as commonjsGlobal, b as commonjsRequire, c as unwrapExports, d as createCommonjsModule } from './chunk-a7525511.js';

class YooFormInputComponent {
    constructor() {
        this.type = 'text';
        this.showPasswordToggle = false;
        this.showInputClear = false;
    }
    componentWillLoad() {
        this.inputTypeState = this.type;
    }
    onInputBlurred(ev) {
        this.inputBlurred.emit(ev);
        this.isLabelAboveVisible = false;
        if (this.host.querySelector('.input-container')) {
            this.host.querySelector('.input-container').setAttribute('style', `border-color: cssvar(dark-20)`);
        }
    }
    onInputChanged(ev) {
        this.value = ev.target && ev.target.value;
        this.inputChanged.emit(this.value);
    }
    onInputFocused() {
        this.isLabelAboveVisible = true;
        this.inputFocused.emit(true);
        if (this.host.querySelector('.input-container')) {
            this.host.querySelector('.input-container').setAttribute('style', `border-color: var(--${this.borderColorOnFocus});`);
        }
    }
    onFocus(icon) {
        let inputEl = this.getInputElement();
        if (inputEl) {
            inputEl.focus();
        }
        if (icon) {
            this.iconClicked.emit(icon);
        }
    }
    onShowPassword() {
        this.inputTypeState === 'password' ? this.inputTypeState = 'text' : this.inputTypeState = 'password';
    }
    onInputClear() {
        this.value = '';
    }
    getInputElement() {
        if (this.host) {
            return this.host.querySelector('input');
        }
        return null;
    }
    render() {
        return [
            this.placeholdertolabel && this.placeholder ?
                h("div", { class: this.placeholdertolabel && this.isLabelAboveVisible ? 'label active' :
                        (this.placeholdertolabel && !this.isLabelAboveVisible ? 'label' : 'label active') },
                    this.placeholder,
                    this.required ? h("span", { class: "label-required" }, "*") : null) : '',
            h("div", { class: this.placeholdertolabel && this.isLabelAboveVisible ? ' input-container placeholderlabel active' :
                    (this.placeholdertolabel && !this.isLabelAboveVisible ? 'input-container placeholderlabel' : 'input-container') },
                this.iconPrefix ?
                    h("div", { class: "icon-prefix" },
                        h("i", { class: this.iconPrefix })) : null,
                h("input", { type: this.inputTypeState, placeholder: !this.placeholdertolabel || !this.isLabelAboveVisible ? this.placeholder : '', value: this.value, required: this.required, onBlur: this.onInputBlurred.bind(this), onInput: this.onInputChanged.bind(this), onFocus: this.onInputFocused.bind(this) }),
                this.type === 'password' && this.showPasswordToggle ?
                    h("div", { class: "icon-suffix", onClick: this.onShowPassword.bind(this) },
                        h("yoo-tooltip", null,
                            h("i", { class: this.inputTypeState === 'password' ? 'yo-eye-01' : 'yo-eye-full', title: "Show Password" })))
                    : null,
                this.showInputClear ?
                    h("div", { class: "icon-suffix", onClick: this.onInputClear.bind(this) },
                        h("yoo-tooltip", null,
                            h("i", { class: "yo-close2", title: "Clear" })))
                    : null,
                this.iconSuffix ?
                    h("div", { class: "icon-suffix", onClick: this.onFocus.bind(this) },
                        h("yoo-tooltip", null,
                            h("i", { class: this.iconSuffix, title: this.tooltip })))
                    : null)
        ];
    }
    static get is() { return "yoo-form-input"; }
    static get encapsulation() { return "scoped"; }
    static get properties() { return { "borderColorOnFocus": { "type": String, "attr": "border-color-on-focus" }, "host": { "elementRef": true }, "iconPrefix": { "type": String, "attr": "icon-prefix" }, "iconSuffix": { "type": String, "attr": "icon-suffix" }, "inputTypeState": { "state": true }, "isLabelAboveVisible": { "state": true }, "placeholder": { "type": String, "attr": "placeholder" }, "placeholdertolabel": { "type": Boolean, "attr": "placeholdertolabel" }, "required": { "type": Boolean, "attr": "required" }, "showInputClear": { "type": Boolean, "attr": "show-input-clear" }, "showPasswordToggle": { "type": Boolean, "attr": "show-password-toggle" }, "tooltip": { "type": String, "attr": "tooltip" }, "type": { "type": String, "attr": "type" }, "value": { "type": String, "attr": "value", "mutable": true } }; }
    static get events() { return [{ "name": "inputBlurred", "method": "inputBlurred", "bubbles": true, "cancelable": true, "composed": true }, { "name": "inputFocused", "method": "inputFocused", "bubbles": true, "cancelable": true, "composed": true }, { "name": "inputChanged", "method": "inputChanged", "bubbles": true, "cancelable": true, "composed": true }, { "name": "iconClicked", "method": "iconClicked", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "\@-moz-document url-prefix() {\n  [attr-layout-fill] {\n    margin: 0;\n    width: 100%;\n    min-height: 100%;\n    height: 100%; } }\n\n\n[attr-flex-order][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 1;\n  -webkit-order: 0;\n  -ms-flex-order: 0;\n  order: 0; }\n\n[attr-flex-order=\"-20\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: -19;\n  -webkit-order: -20;\n  -ms-flex-order: -20;\n  order: -20; }\n\n[attr-flex-order=\"-19\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: -18;\n  -webkit-order: -19;\n  -ms-flex-order: -19;\n  order: -19; }\n\n[attr-flex-order=\"-18\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: -17;\n  -webkit-order: -18;\n  -ms-flex-order: -18;\n  order: -18; }\n\n[attr-flex-order=\"-17\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: -16;\n  -webkit-order: -17;\n  -ms-flex-order: -17;\n  order: -17; }\n\n[attr-flex-order=\"-16\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: -15;\n  -webkit-order: -16;\n  -ms-flex-order: -16;\n  order: -16; }\n\n[attr-flex-order=\"-15\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: -14;\n  -webkit-order: -15;\n  -ms-flex-order: -15;\n  order: -15; }\n\n[attr-flex-order=\"-14\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: -13;\n  -webkit-order: -14;\n  -ms-flex-order: -14;\n  order: -14; }\n\n[attr-flex-order=\"-13\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: -12;\n  -webkit-order: -13;\n  -ms-flex-order: -13;\n  order: -13; }\n\n[attr-flex-order=\"-12\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: -11;\n  -webkit-order: -12;\n  -ms-flex-order: -12;\n  order: -12; }\n\n[attr-flex-order=\"-11\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: -10;\n  -webkit-order: -11;\n  -ms-flex-order: -11;\n  order: -11; }\n\n[attr-flex-order=\"-10\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: -9;\n  -webkit-order: -10;\n  -ms-flex-order: -10;\n  order: -10; }\n\n[attr-flex-order=\"-9\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: -8;\n  -webkit-order: -9;\n  -ms-flex-order: -9;\n  order: -9; }\n\n[attr-flex-order=\"-8\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: -7;\n  -webkit-order: -8;\n  -ms-flex-order: -8;\n  order: -8; }\n\n[attr-flex-order=\"-7\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: -6;\n  -webkit-order: -7;\n  -ms-flex-order: -7;\n  order: -7; }\n\n[attr-flex-order=\"-6\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: -5;\n  -webkit-order: -6;\n  -ms-flex-order: -6;\n  order: -6; }\n\n[attr-flex-order=\"-5\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: -4;\n  -webkit-order: -5;\n  -ms-flex-order: -5;\n  order: -5; }\n\n[attr-flex-order=\"-4\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: -3;\n  -webkit-order: -4;\n  -ms-flex-order: -4;\n  order: -4; }\n\n[attr-flex-order=\"-3\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: -2;\n  -webkit-order: -3;\n  -ms-flex-order: -3;\n  order: -3; }\n\n[attr-flex-order=\"-2\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: -1;\n  -webkit-order: -2;\n  -ms-flex-order: -2;\n  order: -2; }\n\n[attr-flex-order=\"-1\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 0;\n  -webkit-order: -1;\n  -ms-flex-order: -1;\n  order: -1; }\n\n[attr-flex-order=\"0\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 1;\n  -webkit-order: 0;\n  -ms-flex-order: 0;\n  order: 0; }\n\n[attr-flex-order=\"1\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 2;\n  -webkit-order: 1;\n  -ms-flex-order: 1;\n  order: 1; }\n\n[attr-flex-order=\"2\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 3;\n  -webkit-order: 2;\n  -ms-flex-order: 2;\n  order: 2; }\n\n[attr-flex-order=\"3\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 4;\n  -webkit-order: 3;\n  -ms-flex-order: 3;\n  order: 3; }\n\n[attr-flex-order=\"4\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 5;\n  -webkit-order: 4;\n  -ms-flex-order: 4;\n  order: 4; }\n\n[attr-flex-order=\"5\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 6;\n  -webkit-order: 5;\n  -ms-flex-order: 5;\n  order: 5; }\n\n[attr-flex-order=\"6\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 7;\n  -webkit-order: 6;\n  -ms-flex-order: 6;\n  order: 6; }\n\n[attr-flex-order=\"7\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 8;\n  -webkit-order: 7;\n  -ms-flex-order: 7;\n  order: 7; }\n\n[attr-flex-order=\"8\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 9;\n  -webkit-order: 8;\n  -ms-flex-order: 8;\n  order: 8; }\n\n[attr-flex-order=\"9\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 10;\n  -webkit-order: 9;\n  -ms-flex-order: 9;\n  order: 9; }\n\n[attr-flex-order=\"10\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 11;\n  -webkit-order: 10;\n  -ms-flex-order: 10;\n  order: 10; }\n\n[attr-flex-order=\"11\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 12;\n  -webkit-order: 11;\n  -ms-flex-order: 11;\n  order: 11; }\n\n[attr-flex-order=\"12\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 13;\n  -webkit-order: 12;\n  -ms-flex-order: 12;\n  order: 12; }\n\n[attr-flex-order=\"13\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 14;\n  -webkit-order: 13;\n  -ms-flex-order: 13;\n  order: 13; }\n\n[attr-flex-order=\"14\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 15;\n  -webkit-order: 14;\n  -ms-flex-order: 14;\n  order: 14; }\n\n[attr-flex-order=\"15\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 16;\n  -webkit-order: 15;\n  -ms-flex-order: 15;\n  order: 15; }\n\n[attr-flex-order=\"16\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 17;\n  -webkit-order: 16;\n  -ms-flex-order: 16;\n  order: 16; }\n\n[attr-flex-order=\"17\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 18;\n  -webkit-order: 17;\n  -ms-flex-order: 17;\n  order: 17; }\n\n[attr-flex-order=\"18\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 19;\n  -webkit-order: 18;\n  -ms-flex-order: 18;\n  order: 18; }\n\n[attr-flex-order=\"19\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 20;\n  -webkit-order: 19;\n  -ms-flex-order: 19;\n  order: 19; }\n\n[attr-flex-order=\"20\"][data-yoo-form-input] {\n  -webkit-box-ordinal-group: 21;\n  -webkit-order: 20;\n  -ms-flex-order: 20;\n  order: 20; }\n\n[attr-flex-offset=\"0\"][data-yoo-form-input] {\n  margin-left: 0%; }\n\n[attr-flex-offset=\"5\"][data-yoo-form-input] {\n  margin-left: 5%; }\n\n[attr-flex-offset=\"10\"][data-yoo-form-input] {\n  margin-left: 10%; }\n\n[attr-flex-offset=\"15\"][data-yoo-form-input] {\n  margin-left: 15%; }\n\n[attr-flex-offset=\"20\"][data-yoo-form-input] {\n  margin-left: 20%; }\n\n[attr-flex-offset=\"25\"][data-yoo-form-input] {\n  margin-left: 25%; }\n\n[attr-flex-offset=\"30\"][data-yoo-form-input] {\n  margin-left: 30%; }\n\n[attr-flex-offset=\"35\"][data-yoo-form-input] {\n  margin-left: 35%; }\n\n[attr-flex-offset=\"40\"][data-yoo-form-input] {\n  margin-left: 40%; }\n\n[attr-flex-offset=\"45\"][data-yoo-form-input] {\n  margin-left: 45%; }\n\n[attr-flex-offset=\"50\"][data-yoo-form-input] {\n  margin-left: 50%; }\n\n[attr-flex-offset=\"55\"][data-yoo-form-input] {\n  margin-left: 55%; }\n\n[attr-flex-offset=\"60\"][data-yoo-form-input] {\n  margin-left: 60%; }\n\n[attr-flex-offset=\"65\"][data-yoo-form-input] {\n  margin-left: 65%; }\n\n[attr-flex-offset=\"70\"][data-yoo-form-input] {\n  margin-left: 70%; }\n\n[attr-flex-offset=\"75\"][data-yoo-form-input] {\n  margin-left: 75%; }\n\n[attr-flex-offset=\"80\"][data-yoo-form-input] {\n  margin-left: 80%; }\n\n[attr-flex-offset=\"85\"][data-yoo-form-input] {\n  margin-left: 85%; }\n\n[attr-flex-offset=\"90\"][data-yoo-form-input] {\n  margin-left: 90%; }\n\n[attr-flex-offset=\"95\"][data-yoo-form-input] {\n  margin-left: 95%; }\n\n[attr-flex-offset=\"33\"][data-yoo-form-input] {\n  margin-left: calc(100% / 3); }\n\n[attr-flex-offset=\"66\"][data-yoo-form-input] {\n  margin-left: calc(200% / 3); }\n\n[attr-layout-align][data-yoo-form-input], [attr-layout-align=\"start stretch\"][data-yoo-form-input] {\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  -webkit-align-content: stretch;\n  -ms-flex-line-pack: stretch;\n  align-content: stretch;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch; }\n\n[attr-layout-align=\"start\"][data-yoo-form-input], [attr-layout-align=\"start start\"][data-yoo-form-input], [attr-layout-align=\"start center\"][data-yoo-form-input], [attr-layout-align=\"start end\"][data-yoo-form-input], [attr-layout-align=\"start stretch\"][data-yoo-form-input] {\n  -webkit-box-pack: start;\n  -webkit-justify-content: start;\n  -ms-flex-pack: start;\n  justify-content: start; }\n\n[attr-layout-align=\"center\"][data-yoo-form-input], [attr-layout-align=\"center start\"][data-yoo-form-input], [attr-layout-align=\"center center\"][data-yoo-form-input], [attr-layout-align=\"center end\"][data-yoo-form-input], [attr-layout-align=\"center stretch\"][data-yoo-form-input] {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n[attr-layout-align=\"end\"][data-yoo-form-input], [attr-layout-align=\"end center\"][data-yoo-form-input], [attr-layout-align=\"end start\"][data-yoo-form-input], [attr-layout-align=\"end end\"][data-yoo-form-input], [attr-layout-align=\"end stretch\"][data-yoo-form-input] {\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n  -ms-flex-pack: end;\n  justify-content: flex-end; }\n\n[attr-layout-align=\"space-around\"][data-yoo-form-input], [attr-layout-align=\"space-around center\"][data-yoo-form-input], [attr-layout-align=\"space-around start\"][data-yoo-form-input], [attr-layout-align=\"space-around end\"][data-yoo-form-input], [attr-layout-align=\"space-around stretch\"][data-yoo-form-input] {\n  -webkit-justify-content: space-around;\n  -ms-flex-pack: distribute;\n  justify-content: space-around; }\n\n[attr-layout-align=\"space-between\"][data-yoo-form-input], [attr-layout-align=\"space-between center\"][data-yoo-form-input], [attr-layout-align=\"space-between start\"][data-yoo-form-input], [attr-layout-align=\"space-between end\"][data-yoo-form-input], [attr-layout-align=\"space-between stretch\"][data-yoo-form-input] {\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between; }\n\n[attr-layout-align=\"start start\"][data-yoo-form-input], [attr-layout-align=\"center start\"][data-yoo-form-input], [attr-layout-align=\"end start\"][data-yoo-form-input], [attr-layout-align=\"space-between start\"][data-yoo-form-input], [attr-layout-align=\"space-around start\"][data-yoo-form-input] {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -webkit-align-content: flex-start;\n  -ms-flex-line-pack: start;\n  align-content: flex-start; }\n\n[attr-layout-align=\"start center\"][data-yoo-form-input], [attr-layout-align=\"center center\"][data-yoo-form-input], [attr-layout-align=\"end center\"][data-yoo-form-input], [attr-layout-align=\"space-between center\"][data-yoo-form-input], [attr-layout-align=\"space-around center\"][data-yoo-form-input] {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-align-content: center;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  max-width: 100%; }\n\n[attr-layout-align=\"start center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align=\"center center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align=\"end center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align=\"space-between center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align=\"space-around center\"][data-yoo-form-input]    > *[data-yoo-form-input] {\n  max-width: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout-align=\"start end\"][data-yoo-form-input], [attr-layout-align=\"center end\"][data-yoo-form-input], [attr-layout-align=\"end end\"][data-yoo-form-input], [attr-layout-align=\"space-between end\"][data-yoo-form-input], [attr-layout-align=\"space-around end\"][data-yoo-form-input] {\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  -webkit-align-content: flex-end;\n  -ms-flex-line-pack: end;\n  align-content: flex-end; }\n\n[attr-layout-align=\"start stretch\"][data-yoo-form-input], [attr-layout-align=\"center stretch\"][data-yoo-form-input], [attr-layout-align=\"end stretch\"][data-yoo-form-input], [attr-layout-align=\"space-between stretch\"][data-yoo-form-input], [attr-layout-align=\"space-around stretch\"][data-yoo-form-input] {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -webkit-align-content: stretch;\n  -ms-flex-line-pack: stretch;\n  align-content: stretch; }\n\n[attr-flex][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n\@media screen\\0 {\n  [attr-flex][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%; } }\n\n[attr-flex-grow][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 100%;\n  -ms-flex: 1 1 100%;\n  flex: 1 1 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex-initial][data-yoo-form-input] {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 1 auto;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex-auto][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex-none][data-yoo-form-input] {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex-noshrink][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 0 auto;\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex-nogrow][data-yoo-form-input] {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 1 auto;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"0\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 0%;\n  -ms-flex: 1 1 0%;\n  flex: 1 1 0%;\n  max-width: 0%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"0\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"0\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 0%;\n  -ms-flex: 1 1 0%;\n  flex: 1 1 0%;\n  max-width: 0%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"0\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"0\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 0%;\n  -ms-flex: 1 1 0%;\n  flex: 1 1 0%;\n  max-width: 100%;\n  max-height: 0%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"5\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 5%;\n  -ms-flex: 1 1 5%;\n  flex: 1 1 5%;\n  max-width: 5%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"5\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"5\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 5%;\n  -ms-flex: 1 1 5%;\n  flex: 1 1 5%;\n  max-width: 5%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"5\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"5\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 5%;\n  -ms-flex: 1 1 5%;\n  flex: 1 1 5%;\n  max-width: 100%;\n  max-height: 5%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"10\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 10%;\n  -ms-flex: 1 1 10%;\n  flex: 1 1 10%;\n  max-width: 10%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"10\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"10\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 10%;\n  -ms-flex: 1 1 10%;\n  flex: 1 1 10%;\n  max-width: 10%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"10\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"10\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 10%;\n  -ms-flex: 1 1 10%;\n  flex: 1 1 10%;\n  max-width: 100%;\n  max-height: 10%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"15\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 15%;\n  -ms-flex: 1 1 15%;\n  flex: 1 1 15%;\n  max-width: 15%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"15\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"15\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 15%;\n  -ms-flex: 1 1 15%;\n  flex: 1 1 15%;\n  max-width: 15%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"15\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"15\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 15%;\n  -ms-flex: 1 1 15%;\n  flex: 1 1 15%;\n  max-width: 100%;\n  max-height: 15%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"20\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 20%;\n  -ms-flex: 1 1 20%;\n  flex: 1 1 20%;\n  max-width: 20%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"20\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"20\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 20%;\n  -ms-flex: 1 1 20%;\n  flex: 1 1 20%;\n  max-width: 20%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"20\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"20\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 20%;\n  -ms-flex: 1 1 20%;\n  flex: 1 1 20%;\n  max-width: 100%;\n  max-height: 20%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"25\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 25%;\n  -ms-flex: 1 1 25%;\n  flex: 1 1 25%;\n  max-width: 25%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"25\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"25\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 25%;\n  -ms-flex: 1 1 25%;\n  flex: 1 1 25%;\n  max-width: 25%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"25\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"25\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 25%;\n  -ms-flex: 1 1 25%;\n  flex: 1 1 25%;\n  max-width: 100%;\n  max-height: 25%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"30\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 30%;\n  -ms-flex: 1 1 30%;\n  flex: 1 1 30%;\n  max-width: 30%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"30\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"30\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 30%;\n  -ms-flex: 1 1 30%;\n  flex: 1 1 30%;\n  max-width: 30%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"30\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"30\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 30%;\n  -ms-flex: 1 1 30%;\n  flex: 1 1 30%;\n  max-width: 100%;\n  max-height: 30%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"35\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 35%;\n  -ms-flex: 1 1 35%;\n  flex: 1 1 35%;\n  max-width: 35%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"35\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"35\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 35%;\n  -ms-flex: 1 1 35%;\n  flex: 1 1 35%;\n  max-width: 35%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"35\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"35\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 35%;\n  -ms-flex: 1 1 35%;\n  flex: 1 1 35%;\n  max-width: 100%;\n  max-height: 35%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"40\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 40%;\n  -ms-flex: 1 1 40%;\n  flex: 1 1 40%;\n  max-width: 40%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"40\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"40\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 40%;\n  -ms-flex: 1 1 40%;\n  flex: 1 1 40%;\n  max-width: 40%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"40\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"40\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 40%;\n  -ms-flex: 1 1 40%;\n  flex: 1 1 40%;\n  max-width: 100%;\n  max-height: 40%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"45\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 45%;\n  -ms-flex: 1 1 45%;\n  flex: 1 1 45%;\n  max-width: 45%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"45\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"45\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 45%;\n  -ms-flex: 1 1 45%;\n  flex: 1 1 45%;\n  max-width: 45%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"45\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"45\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 45%;\n  -ms-flex: 1 1 45%;\n  flex: 1 1 45%;\n  max-width: 100%;\n  max-height: 45%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"50\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 50%;\n  -ms-flex: 1 1 50%;\n  flex: 1 1 50%;\n  max-width: 50%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"50\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"50\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 50%;\n  -ms-flex: 1 1 50%;\n  flex: 1 1 50%;\n  max-width: 50%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"50\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"50\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 50%;\n  -ms-flex: 1 1 50%;\n  flex: 1 1 50%;\n  max-width: 100%;\n  max-height: 50%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"55\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 55%;\n  -ms-flex: 1 1 55%;\n  flex: 1 1 55%;\n  max-width: 55%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"55\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"55\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 55%;\n  -ms-flex: 1 1 55%;\n  flex: 1 1 55%;\n  max-width: 55%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"55\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"55\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 55%;\n  -ms-flex: 1 1 55%;\n  flex: 1 1 55%;\n  max-width: 100%;\n  max-height: 55%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"60\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 60%;\n  -ms-flex: 1 1 60%;\n  flex: 1 1 60%;\n  max-width: 60%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"60\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"60\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 60%;\n  -ms-flex: 1 1 60%;\n  flex: 1 1 60%;\n  max-width: 60%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"60\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"60\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 60%;\n  -ms-flex: 1 1 60%;\n  flex: 1 1 60%;\n  max-width: 100%;\n  max-height: 60%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"65\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 65%;\n  -ms-flex: 1 1 65%;\n  flex: 1 1 65%;\n  max-width: 65%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"65\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"65\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 65%;\n  -ms-flex: 1 1 65%;\n  flex: 1 1 65%;\n  max-width: 65%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"65\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"65\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 65%;\n  -ms-flex: 1 1 65%;\n  flex: 1 1 65%;\n  max-width: 100%;\n  max-height: 65%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"70\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 70%;\n  -ms-flex: 1 1 70%;\n  flex: 1 1 70%;\n  max-width: 70%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"70\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"70\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 70%;\n  -ms-flex: 1 1 70%;\n  flex: 1 1 70%;\n  max-width: 70%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"70\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"70\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 70%;\n  -ms-flex: 1 1 70%;\n  flex: 1 1 70%;\n  max-width: 100%;\n  max-height: 70%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"75\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 75%;\n  -ms-flex: 1 1 75%;\n  flex: 1 1 75%;\n  max-width: 75%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"75\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"75\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 75%;\n  -ms-flex: 1 1 75%;\n  flex: 1 1 75%;\n  max-width: 75%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"75\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"75\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 75%;\n  -ms-flex: 1 1 75%;\n  flex: 1 1 75%;\n  max-width: 100%;\n  max-height: 75%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"80\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 80%;\n  -ms-flex: 1 1 80%;\n  flex: 1 1 80%;\n  max-width: 80%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"80\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"80\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 80%;\n  -ms-flex: 1 1 80%;\n  flex: 1 1 80%;\n  max-width: 80%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"80\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"80\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 80%;\n  -ms-flex: 1 1 80%;\n  flex: 1 1 80%;\n  max-width: 100%;\n  max-height: 80%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"85\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 85%;\n  -ms-flex: 1 1 85%;\n  flex: 1 1 85%;\n  max-width: 85%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"85\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"85\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 85%;\n  -ms-flex: 1 1 85%;\n  flex: 1 1 85%;\n  max-width: 85%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"85\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"85\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 85%;\n  -ms-flex: 1 1 85%;\n  flex: 1 1 85%;\n  max-width: 100%;\n  max-height: 85%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"90\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 90%;\n  -ms-flex: 1 1 90%;\n  flex: 1 1 90%;\n  max-width: 90%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"90\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"90\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 90%;\n  -ms-flex: 1 1 90%;\n  flex: 1 1 90%;\n  max-width: 90%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"90\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"90\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 90%;\n  -ms-flex: 1 1 90%;\n  flex: 1 1 90%;\n  max-width: 100%;\n  max-height: 90%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"95\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 95%;\n  -ms-flex: 1 1 95%;\n  flex: 1 1 95%;\n  max-width: 95%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"95\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"95\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 95%;\n  -ms-flex: 1 1 95%;\n  flex: 1 1 95%;\n  max-width: 95%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"95\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"95\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 95%;\n  -ms-flex: 1 1 95%;\n  flex: 1 1 95%;\n  max-width: 100%;\n  max-height: 95%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-flex=\"100\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 100%;\n  -ms-flex: 1 1 100%;\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"100\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"100\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 100%;\n  -ms-flex: 1 1 100%;\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"100\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"100\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 100%;\n  -ms-flex: 1 1 100%;\n  flex: 1 1 100%;\n  max-width: 100%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"33\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"33\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"33\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"33\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 33%;\n  -ms-flex: 1 1 33%;\n  flex: 1 1 33%;\n  max-width: calc(100% / 3);\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"34\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"34\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"34\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"34\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 34%;\n  -ms-flex: 1 1 34%;\n  flex: 1 1 34%;\n  max-width: 34%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"66\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"66\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"66\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"66\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 66%;\n  -ms-flex: 1 1 66%;\n  flex: 1 1 66%;\n  max-width: calc(200% / 3);\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"67\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"67\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"67\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex=\"67\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 67%;\n  -ms-flex: 1 1 67%;\n  flex: 1 1 67%;\n  max-width: 67%;\n  max-height: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"33\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"33\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"33\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"33\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 33%;\n  -ms-flex: 1 1 33%;\n  flex: 1 1 33%;\n  max-width: 100%;\n  max-height: calc(100% / 3);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"34\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"34\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"34\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"34\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 34%;\n  -ms-flex: 1 1 34%;\n  flex: 1 1 34%;\n  max-width: 100%;\n  max-height: 34%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"66\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"66\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"66\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"66\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 66%;\n  -ms-flex: 1 1 66%;\n  flex: 1 1 66%;\n  max-width: 100%;\n  max-height: calc(200% / 3);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"67\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"67\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"67\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex=\"67\"][data-yoo-form-input] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 67%;\n  -ms-flex: 1 1 67%;\n  flex: 1 1 67%;\n  max-width: 100%;\n  max-height: 67%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[attr-layout][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input] {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n[attr-layout=\"column\"][data-yoo-form-input] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n\n[attr-layout=\"row\"][data-yoo-form-input] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row; }\n\n[attr-layout-padding][data-yoo-form-input]    > [attr-flex-sm][data-yoo-form-input], [attr-layout-padding][data-yoo-form-input]    > [attr-flex-lt-md][data-yoo-form-input] {\n  padding: 4px; }\n\n[attr-layout-padding][data-yoo-form-input], [attr-layout-padding][data-yoo-form-input]    > [attr-flex][data-yoo-form-input], [attr-layout-padding][data-yoo-form-input]    > [attr-flex-gt-sm][data-yoo-form-input], [attr-layout-padding][data-yoo-form-input]    > [attr-flex-md][data-yoo-form-input], [attr-layout-padding][data-yoo-form-input]    > [attr-flex-lt-lg][data-yoo-form-input] {\n  padding: 8px; }\n\n[attr-layout-padding][data-yoo-form-input]    > [attr-flex-gt-md][data-yoo-form-input], [attr-layout-padding][data-yoo-form-input]    > [attr-flex-lg][data-yoo-form-input] {\n  padding: 16px; }\n\n[attr-layout-margin][data-yoo-form-input]    > [attr-flex-sm][data-yoo-form-input], [attr-layout-margin][data-yoo-form-input]    > [attr-flex-lt-md][data-yoo-form-input] {\n  margin: 4px; }\n\n[attr-layout-margin][data-yoo-form-input], [attr-layout-margin][data-yoo-form-input]    > [attr-flex][data-yoo-form-input], [attr-layout-margin][data-yoo-form-input]    > [attr-flex-gt-sm][data-yoo-form-input], [attr-layout-margin][data-yoo-form-input]    > [attr-flex-md][data-yoo-form-input], [attr-layout-margin][data-yoo-form-input]    > [attr-flex-lt-lg][data-yoo-form-input] {\n  margin: 8px; }\n\n[attr-layout-margin][data-yoo-form-input]    > [attr-flex-gt-md][data-yoo-form-input], [attr-layout-margin][data-yoo-form-input]    > [attr-flex-lg][data-yoo-form-input] {\n  margin: 16px; }\n\n[attr-layout-wrap][data-yoo-form-input] {\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n[attr-layout-nowrap][data-yoo-form-input] {\n  -webkit-flex-wrap: nowrap;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap; }\n\n[attr-layout-fill][data-yoo-form-input] {\n  margin: 0;\n  width: 100%;\n  min-height: 100%;\n  height: 100%; }\n\n\n\@media (max-width: 599px) {\n  [attr-hide-xs][data-yoo-form-input]:not([attr-show-xs]):not([attr-show]), [attr-hide][data-yoo-form-input]:not([attr-show-xs]):not([attr-show]) {\n    display: none; }\n  [attr-flex-order-xs=\"-20\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -19;\n    -webkit-order: -20;\n    -ms-flex-order: -20;\n    order: -20; }\n  [attr-flex-order-xs=\"-19\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -18;\n    -webkit-order: -19;\n    -ms-flex-order: -19;\n    order: -19; }\n  [attr-flex-order-xs=\"-18\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -17;\n    -webkit-order: -18;\n    -ms-flex-order: -18;\n    order: -18; }\n  [attr-flex-order-xs=\"-17\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -16;\n    -webkit-order: -17;\n    -ms-flex-order: -17;\n    order: -17; }\n  [attr-flex-order-xs=\"-16\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -15;\n    -webkit-order: -16;\n    -ms-flex-order: -16;\n    order: -16; }\n  [attr-flex-order-xs=\"-15\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -14;\n    -webkit-order: -15;\n    -ms-flex-order: -15;\n    order: -15; }\n  [attr-flex-order-xs=\"-14\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -13;\n    -webkit-order: -14;\n    -ms-flex-order: -14;\n    order: -14; }\n  [attr-flex-order-xs=\"-13\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -12;\n    -webkit-order: -13;\n    -ms-flex-order: -13;\n    order: -13; }\n  [attr-flex-order-xs=\"-12\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -11;\n    -webkit-order: -12;\n    -ms-flex-order: -12;\n    order: -12; }\n  [attr-flex-order-xs=\"-11\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -10;\n    -webkit-order: -11;\n    -ms-flex-order: -11;\n    order: -11; }\n  [attr-flex-order-xs=\"-10\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -9;\n    -webkit-order: -10;\n    -ms-flex-order: -10;\n    order: -10; }\n  [attr-flex-order-xs=\"-9\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -8;\n    -webkit-order: -9;\n    -ms-flex-order: -9;\n    order: -9; }\n  [attr-flex-order-xs=\"-8\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -7;\n    -webkit-order: -8;\n    -ms-flex-order: -8;\n    order: -8; }\n  [attr-flex-order-xs=\"-7\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -6;\n    -webkit-order: -7;\n    -ms-flex-order: -7;\n    order: -7; }\n  [attr-flex-order-xs=\"-6\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -5;\n    -webkit-order: -6;\n    -ms-flex-order: -6;\n    order: -6; }\n  [attr-flex-order-xs=\"-5\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -4;\n    -webkit-order: -5;\n    -ms-flex-order: -5;\n    order: -5; }\n  [attr-flex-order-xs=\"-4\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -3;\n    -webkit-order: -4;\n    -ms-flex-order: -4;\n    order: -4; }\n  [attr-flex-order-xs=\"-3\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -2;\n    -webkit-order: -3;\n    -ms-flex-order: -3;\n    order: -3; }\n  [attr-flex-order-xs=\"-2\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -1;\n    -webkit-order: -2;\n    -ms-flex-order: -2;\n    order: -2; }\n  [attr-flex-order-xs=\"-1\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n    -ms-flex-order: -1;\n    order: -1; }\n  [attr-flex-order-xs=\"0\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n    -ms-flex-order: 0;\n    order: 0; }\n  [attr-flex-order-xs=\"1\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n    -ms-flex-order: 1;\n    order: 1; }\n  [attr-flex-order-xs=\"2\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n    -ms-flex-order: 2;\n    order: 2; }\n  [attr-flex-order-xs=\"3\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n    -ms-flex-order: 3;\n    order: 3; }\n  [attr-flex-order-xs=\"4\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n    -ms-flex-order: 4;\n    order: 4; }\n  [attr-flex-order-xs=\"5\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n    -ms-flex-order: 5;\n    order: 5; }\n  [attr-flex-order-xs=\"6\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n    -ms-flex-order: 6;\n    order: 6; }\n  [attr-flex-order-xs=\"7\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n    -ms-flex-order: 7;\n    order: 7; }\n  [attr-flex-order-xs=\"8\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n    -ms-flex-order: 8;\n    order: 8; }\n  [attr-flex-order-xs=\"9\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n    -ms-flex-order: 9;\n    order: 9; }\n  [attr-flex-order-xs=\"10\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n    -ms-flex-order: 10;\n    order: 10; }\n  [attr-flex-order-xs=\"11\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n    -ms-flex-order: 11;\n    order: 11; }\n  [attr-flex-order-xs=\"12\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n    -ms-flex-order: 12;\n    order: 12; }\n  [attr-flex-order-xs=\"13\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n    -ms-flex-order: 13;\n    order: 13; }\n  [attr-flex-order-xs=\"14\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 15;\n    -webkit-order: 14;\n    -ms-flex-order: 14;\n    order: 14; }\n  [attr-flex-order-xs=\"15\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 16;\n    -webkit-order: 15;\n    -ms-flex-order: 15;\n    order: 15; }\n  [attr-flex-order-xs=\"16\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 17;\n    -webkit-order: 16;\n    -ms-flex-order: 16;\n    order: 16; }\n  [attr-flex-order-xs=\"17\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 18;\n    -webkit-order: 17;\n    -ms-flex-order: 17;\n    order: 17; }\n  [attr-flex-order-xs=\"18\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 19;\n    -webkit-order: 18;\n    -ms-flex-order: 18;\n    order: 18; }\n  [attr-flex-order-xs=\"19\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 20;\n    -webkit-order: 19;\n    -ms-flex-order: 19;\n    order: 19; }\n  [attr-flex-order-xs=\"20\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 21;\n    -webkit-order: 20;\n    -ms-flex-order: 20;\n    order: 20; }\n  [attr-flex-offset-xs=\"0\"][data-yoo-form-input] {\n    margin-left: 0%; }\n  [attr-flex-offset-xs=\"5\"][data-yoo-form-input] {\n    margin-left: 5%; }\n  [attr-flex-offset-xs=\"10\"][data-yoo-form-input] {\n    margin-left: 10%; }\n  [attr-flex-offset-xs=\"15\"][data-yoo-form-input] {\n    margin-left: 15%; }\n  [attr-flex-offset-xs=\"20\"][data-yoo-form-input] {\n    margin-left: 20%; }\n  [attr-flex-offset-xs=\"25\"][data-yoo-form-input] {\n    margin-left: 25%; }\n  [attr-flex-offset-xs=\"30\"][data-yoo-form-input] {\n    margin-left: 30%; }\n  [attr-flex-offset-xs=\"35\"][data-yoo-form-input] {\n    margin-left: 35%; }\n  [attr-flex-offset-xs=\"40\"][data-yoo-form-input] {\n    margin-left: 40%; }\n  [attr-flex-offset-xs=\"45\"][data-yoo-form-input] {\n    margin-left: 45%; }\n  [attr-flex-offset-xs=\"50\"][data-yoo-form-input] {\n    margin-left: 50%; }\n  [attr-flex-offset-xs=\"55\"][data-yoo-form-input] {\n    margin-left: 55%; }\n  [attr-flex-offset-xs=\"60\"][data-yoo-form-input] {\n    margin-left: 60%; }\n  [attr-flex-offset-xs=\"65\"][data-yoo-form-input] {\n    margin-left: 65%; }\n  [attr-flex-offset-xs=\"70\"][data-yoo-form-input] {\n    margin-left: 70%; }\n  [attr-flex-offset-xs=\"75\"][data-yoo-form-input] {\n    margin-left: 75%; }\n  [attr-flex-offset-xs=\"80\"][data-yoo-form-input] {\n    margin-left: 80%; }\n  [attr-flex-offset-xs=\"85\"][data-yoo-form-input] {\n    margin-left: 85%; }\n  [attr-flex-offset-xs=\"90\"][data-yoo-form-input] {\n    margin-left: 90%; }\n  [attr-flex-offset-xs=\"95\"][data-yoo-form-input] {\n    margin-left: 95%; }\n  [attr-flex-offset-xs=\"33\"][data-yoo-form-input] {\n    margin-left: calc(100% / 3); }\n  [attr-flex-offset-xs=\"66\"][data-yoo-form-input] {\n    margin-left: calc(200% / 3); }\n  [attr-layout-align-xs][data-yoo-form-input], [attr-layout-align-xs=\"start stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    -webkit-align-content: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch;\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch; }\n  [attr-layout-align-xs=\"start\"][data-yoo-form-input], [attr-layout-align-xs=\"start start\"][data-yoo-form-input], [attr-layout-align-xs=\"start center\"][data-yoo-form-input], [attr-layout-align-xs=\"start end\"][data-yoo-form-input], [attr-layout-align-xs=\"start stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: start;\n    -webkit-justify-content: start;\n    -ms-flex-pack: start;\n    justify-content: start; }\n  [attr-layout-align-xs=\"center\"][data-yoo-form-input], [attr-layout-align-xs=\"center start\"][data-yoo-form-input], [attr-layout-align-xs=\"center center\"][data-yoo-form-input], [attr-layout-align-xs=\"center end\"][data-yoo-form-input], [attr-layout-align-xs=\"center stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center; }\n  [attr-layout-align-xs=\"end\"][data-yoo-form-input], [attr-layout-align-xs=\"end center\"][data-yoo-form-input], [attr-layout-align-xs=\"end start\"][data-yoo-form-input], [attr-layout-align-xs=\"end end\"][data-yoo-form-input], [attr-layout-align-xs=\"end stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n    -ms-flex-pack: end;\n    justify-content: flex-end; }\n  [attr-layout-align-xs=\"space-around\"][data-yoo-form-input], [attr-layout-align-xs=\"space-around center\"][data-yoo-form-input], [attr-layout-align-xs=\"space-around start\"][data-yoo-form-input], [attr-layout-align-xs=\"space-around end\"][data-yoo-form-input], [attr-layout-align-xs=\"space-around stretch\"][data-yoo-form-input] {\n    -webkit-justify-content: space-around;\n    -ms-flex-pack: distribute;\n    justify-content: space-around; }\n  [attr-layout-align-xs=\"space-between\"][data-yoo-form-input], [attr-layout-align-xs=\"space-between center\"][data-yoo-form-input], [attr-layout-align-xs=\"space-between start\"][data-yoo-form-input], [attr-layout-align-xs=\"space-between end\"][data-yoo-form-input], [attr-layout-align-xs=\"space-between stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n  [attr-layout-align-xs=\"start start\"][data-yoo-form-input], [attr-layout-align-xs=\"center start\"][data-yoo-form-input], [attr-layout-align-xs=\"end start\"][data-yoo-form-input], [attr-layout-align-xs=\"space-between start\"][data-yoo-form-input], [attr-layout-align-xs=\"space-around start\"][data-yoo-form-input] {\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n    -webkit-align-content: flex-start;\n    -ms-flex-line-pack: start;\n    align-content: flex-start; }\n  [attr-layout-align-xs=\"start center\"][data-yoo-form-input], [attr-layout-align-xs=\"center center\"][data-yoo-form-input], [attr-layout-align-xs=\"end center\"][data-yoo-form-input], [attr-layout-align-xs=\"space-between center\"][data-yoo-form-input], [attr-layout-align-xs=\"space-around center\"][data-yoo-form-input] {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-align-content: center;\n    -ms-flex-line-pack: center;\n    align-content: center;\n    max-width: 100%; }\n  [attr-layout-align-xs=\"start center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-xs=\"center center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-xs=\"end center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-xs=\"space-between center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-xs=\"space-around center\"][data-yoo-form-input]    > *[data-yoo-form-input] {\n    max-width: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout-align-xs=\"start end\"][data-yoo-form-input], [attr-layout-align-xs=\"center end\"][data-yoo-form-input], [attr-layout-align-xs=\"end end\"][data-yoo-form-input], [attr-layout-align-xs=\"space-between end\"][data-yoo-form-input], [attr-layout-align-xs=\"space-around end\"][data-yoo-form-input] {\n    -webkit-box-align: end;\n    -webkit-align-items: flex-end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n    -webkit-align-content: flex-end;\n    -ms-flex-line-pack: end;\n    align-content: flex-end; }\n  [attr-layout-align-xs=\"start stretch\"][data-yoo-form-input], [attr-layout-align-xs=\"center stretch\"][data-yoo-form-input], [attr-layout-align-xs=\"end stretch\"][data-yoo-form-input], [attr-layout-align-xs=\"space-between stretch\"][data-yoo-form-input], [attr-layout-align-xs=\"space-around stretch\"][data-yoo-form-input] {\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    -webkit-align-content: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch; }\n  [attr-flex-xs][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; } }\n\n\@media screen\\0  and (max-width: 599px) {\n  [attr-flex-xs][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%; } }\n\n\@media (max-width: 599px) {\n  [attr-flex-xs-grow][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs-initial][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 auto;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs-auto][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs-none][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs-noshrink][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 auto;\n    -ms-flex: 1 0 auto;\n    flex: 1 0 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs-nogrow][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 auto;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 0%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"0\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 0%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"0\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 100%;\n    max-height: 0%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 5%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"5\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 5%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"5\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 100%;\n    max-height: 5%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 10%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"10\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 10%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"10\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 100%;\n    max-height: 10%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 15%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"15\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 15%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"15\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 100%;\n    max-height: 15%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 20%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"20\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 20%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"20\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 100%;\n    max-height: 20%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 25%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"25\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 25%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"25\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 100%;\n    max-height: 25%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 30%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"30\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 30%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"30\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 100%;\n    max-height: 30%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 35%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"35\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 35%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"35\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 100%;\n    max-height: 35%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 40%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"40\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 40%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"40\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 100%;\n    max-height: 40%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 45%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"45\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 45%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"45\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 100%;\n    max-height: 45%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 50%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"50\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 50%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"50\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 100%;\n    max-height: 50%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 55%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"55\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 55%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"55\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 100%;\n    max-height: 55%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 60%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"60\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 60%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"60\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 100%;\n    max-height: 60%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 65%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"65\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 65%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"65\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 100%;\n    max-height: 65%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 70%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"70\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 70%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"70\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 100%;\n    max-height: 70%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 75%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"75\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 75%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"75\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 100%;\n    max-height: 75%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 80%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"80\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 80%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"80\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 100%;\n    max-height: 80%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 85%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"85\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 85%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"85\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 100%;\n    max-height: 85%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 90%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"90\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 90%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"90\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 100%;\n    max-height: 90%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 95%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"95\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 95%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"95\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 100%;\n    max-height: 95%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xs=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"100\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"100\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"33\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"33\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"33\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"33\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 33%;\n    -ms-flex: 1 1 33%;\n    flex: 1 1 33%;\n    max-width: calc(100% / 3);\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"34\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"34\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"34\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"34\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 34%;\n    -ms-flex: 1 1 34%;\n    flex: 1 1 34%;\n    max-width: 34%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"66\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"66\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"66\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"66\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 66%;\n    -ms-flex: 1 1 66%;\n    flex: 1 1 66%;\n    max-width: calc(200% / 3);\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"67\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"67\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"67\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input]    > [attr-flex-xs=\"67\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 67%;\n    -ms-flex: 1 1 67%;\n    flex: 1 1 67%;\n    max-width: 67%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"33\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"33\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"33\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"33\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 33%;\n    -ms-flex: 1 1 33%;\n    flex: 1 1 33%;\n    max-width: 100%;\n    max-height: calc(100% / 3);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"34\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"34\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"34\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"34\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 34%;\n    -ms-flex: 1 1 34%;\n    flex: 1 1 34%;\n    max-width: 100%;\n    max-height: 34%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"66\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"66\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"66\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"66\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 66%;\n    -ms-flex: 1 1 66%;\n    flex: 1 1 66%;\n    max-width: 100%;\n    max-height: calc(200% / 3);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"67\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"67\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"67\"][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input]    > [attr-flex-xs=\"67\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 67%;\n    -ms-flex: 1 1 67%;\n    flex: 1 1 67%;\n    max-width: 100%;\n    max-height: 67%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout-xs][data-yoo-form-input], [attr-layout-xs=\"column\"][data-yoo-form-input], [attr-layout-xs=\"row\"][data-yoo-form-input] {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex; }\n  [attr-layout-xs=\"column\"][data-yoo-form-input] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column; }\n  [attr-layout-xs=\"row\"][data-yoo-form-input] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row; } }\n\n\@media (min-width: 600px) {\n  [attr-flex-order-gt-xs=\"-20\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -19;\n    -webkit-order: -20;\n    -ms-flex-order: -20;\n    order: -20; }\n  [attr-flex-order-gt-xs=\"-19\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -18;\n    -webkit-order: -19;\n    -ms-flex-order: -19;\n    order: -19; }\n  [attr-flex-order-gt-xs=\"-18\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -17;\n    -webkit-order: -18;\n    -ms-flex-order: -18;\n    order: -18; }\n  [attr-flex-order-gt-xs=\"-17\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -16;\n    -webkit-order: -17;\n    -ms-flex-order: -17;\n    order: -17; }\n  [attr-flex-order-gt-xs=\"-16\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -15;\n    -webkit-order: -16;\n    -ms-flex-order: -16;\n    order: -16; }\n  [attr-flex-order-gt-xs=\"-15\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -14;\n    -webkit-order: -15;\n    -ms-flex-order: -15;\n    order: -15; }\n  [attr-flex-order-gt-xs=\"-14\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -13;\n    -webkit-order: -14;\n    -ms-flex-order: -14;\n    order: -14; }\n  [attr-flex-order-gt-xs=\"-13\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -12;\n    -webkit-order: -13;\n    -ms-flex-order: -13;\n    order: -13; }\n  [attr-flex-order-gt-xs=\"-12\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -11;\n    -webkit-order: -12;\n    -ms-flex-order: -12;\n    order: -12; }\n  [attr-flex-order-gt-xs=\"-11\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -10;\n    -webkit-order: -11;\n    -ms-flex-order: -11;\n    order: -11; }\n  [attr-flex-order-gt-xs=\"-10\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -9;\n    -webkit-order: -10;\n    -ms-flex-order: -10;\n    order: -10; }\n  [attr-flex-order-gt-xs=\"-9\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -8;\n    -webkit-order: -9;\n    -ms-flex-order: -9;\n    order: -9; }\n  [attr-flex-order-gt-xs=\"-8\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -7;\n    -webkit-order: -8;\n    -ms-flex-order: -8;\n    order: -8; }\n  [attr-flex-order-gt-xs=\"-7\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -6;\n    -webkit-order: -7;\n    -ms-flex-order: -7;\n    order: -7; }\n  [attr-flex-order-gt-xs=\"-6\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -5;\n    -webkit-order: -6;\n    -ms-flex-order: -6;\n    order: -6; }\n  [attr-flex-order-gt-xs=\"-5\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -4;\n    -webkit-order: -5;\n    -ms-flex-order: -5;\n    order: -5; }\n  [attr-flex-order-gt-xs=\"-4\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -3;\n    -webkit-order: -4;\n    -ms-flex-order: -4;\n    order: -4; }\n  [attr-flex-order-gt-xs=\"-3\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -2;\n    -webkit-order: -3;\n    -ms-flex-order: -3;\n    order: -3; }\n  [attr-flex-order-gt-xs=\"-2\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -1;\n    -webkit-order: -2;\n    -ms-flex-order: -2;\n    order: -2; }\n  [attr-flex-order-gt-xs=\"-1\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n    -ms-flex-order: -1;\n    order: -1; }\n  [attr-flex-order-gt-xs=\"0\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n    -ms-flex-order: 0;\n    order: 0; }\n  [attr-flex-order-gt-xs=\"1\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n    -ms-flex-order: 1;\n    order: 1; }\n  [attr-flex-order-gt-xs=\"2\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n    -ms-flex-order: 2;\n    order: 2; }\n  [attr-flex-order-gt-xs=\"3\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n    -ms-flex-order: 3;\n    order: 3; }\n  [attr-flex-order-gt-xs=\"4\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n    -ms-flex-order: 4;\n    order: 4; }\n  [attr-flex-order-gt-xs=\"5\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n    -ms-flex-order: 5;\n    order: 5; }\n  [attr-flex-order-gt-xs=\"6\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n    -ms-flex-order: 6;\n    order: 6; }\n  [attr-flex-order-gt-xs=\"7\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n    -ms-flex-order: 7;\n    order: 7; }\n  [attr-flex-order-gt-xs=\"8\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n    -ms-flex-order: 8;\n    order: 8; }\n  [attr-flex-order-gt-xs=\"9\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n    -ms-flex-order: 9;\n    order: 9; }\n  [attr-flex-order-gt-xs=\"10\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n    -ms-flex-order: 10;\n    order: 10; }\n  [attr-flex-order-gt-xs=\"11\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n    -ms-flex-order: 11;\n    order: 11; }\n  [attr-flex-order-gt-xs=\"12\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n    -ms-flex-order: 12;\n    order: 12; }\n  [attr-flex-order-gt-xs=\"13\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n    -ms-flex-order: 13;\n    order: 13; }\n  [attr-flex-order-gt-xs=\"14\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 15;\n    -webkit-order: 14;\n    -ms-flex-order: 14;\n    order: 14; }\n  [attr-flex-order-gt-xs=\"15\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 16;\n    -webkit-order: 15;\n    -ms-flex-order: 15;\n    order: 15; }\n  [attr-flex-order-gt-xs=\"16\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 17;\n    -webkit-order: 16;\n    -ms-flex-order: 16;\n    order: 16; }\n  [attr-flex-order-gt-xs=\"17\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 18;\n    -webkit-order: 17;\n    -ms-flex-order: 17;\n    order: 17; }\n  [attr-flex-order-gt-xs=\"18\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 19;\n    -webkit-order: 18;\n    -ms-flex-order: 18;\n    order: 18; }\n  [attr-flex-order-gt-xs=\"19\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 20;\n    -webkit-order: 19;\n    -ms-flex-order: 19;\n    order: 19; }\n  [attr-flex-order-gt-xs=\"20\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 21;\n    -webkit-order: 20;\n    -ms-flex-order: 20;\n    order: 20; }\n  [attr-flex-offset-gt-xs=\"0\"][data-yoo-form-input] {\n    margin-left: 0%; }\n  [attr-flex-offset-gt-xs=\"5\"][data-yoo-form-input] {\n    margin-left: 5%; }\n  [attr-flex-offset-gt-xs=\"10\"][data-yoo-form-input] {\n    margin-left: 10%; }\n  [attr-flex-offset-gt-xs=\"15\"][data-yoo-form-input] {\n    margin-left: 15%; }\n  [attr-flex-offset-gt-xs=\"20\"][data-yoo-form-input] {\n    margin-left: 20%; }\n  [attr-flex-offset-gt-xs=\"25\"][data-yoo-form-input] {\n    margin-left: 25%; }\n  [attr-flex-offset-gt-xs=\"30\"][data-yoo-form-input] {\n    margin-left: 30%; }\n  [attr-flex-offset-gt-xs=\"35\"][data-yoo-form-input] {\n    margin-left: 35%; }\n  [attr-flex-offset-gt-xs=\"40\"][data-yoo-form-input] {\n    margin-left: 40%; }\n  [attr-flex-offset-gt-xs=\"45\"][data-yoo-form-input] {\n    margin-left: 45%; }\n  [attr-flex-offset-gt-xs=\"50\"][data-yoo-form-input] {\n    margin-left: 50%; }\n  [attr-flex-offset-gt-xs=\"55\"][data-yoo-form-input] {\n    margin-left: 55%; }\n  [attr-flex-offset-gt-xs=\"60\"][data-yoo-form-input] {\n    margin-left: 60%; }\n  [attr-flex-offset-gt-xs=\"65\"][data-yoo-form-input] {\n    margin-left: 65%; }\n  [attr-flex-offset-gt-xs=\"70\"][data-yoo-form-input] {\n    margin-left: 70%; }\n  [attr-flex-offset-gt-xs=\"75\"][data-yoo-form-input] {\n    margin-left: 75%; }\n  [attr-flex-offset-gt-xs=\"80\"][data-yoo-form-input] {\n    margin-left: 80%; }\n  [attr-flex-offset-gt-xs=\"85\"][data-yoo-form-input] {\n    margin-left: 85%; }\n  [attr-flex-offset-gt-xs=\"90\"][data-yoo-form-input] {\n    margin-left: 90%; }\n  [attr-flex-offset-gt-xs=\"95\"][data-yoo-form-input] {\n    margin-left: 95%; }\n  [attr-flex-offset-gt-xs=\"33\"][data-yoo-form-input] {\n    margin-left: calc(100% / 3); }\n  [attr-flex-offset-gt-xs=\"66\"][data-yoo-form-input] {\n    margin-left: calc(200% / 3); }\n  [attr-layout-align-gt-xs][data-yoo-form-input], [attr-layout-align-gt-xs=\"start stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    -webkit-align-content: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch;\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch; }\n  [attr-layout-align-gt-xs=\"start\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"start start\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"start center\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"start end\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"start stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: start;\n    -webkit-justify-content: start;\n    -ms-flex-pack: start;\n    justify-content: start; }\n  [attr-layout-align-gt-xs=\"center\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"center start\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"center center\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"center end\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"center stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center; }\n  [attr-layout-align-gt-xs=\"end\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"end center\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"end start\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"end end\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"end stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n    -ms-flex-pack: end;\n    justify-content: flex-end; }\n  [attr-layout-align-gt-xs=\"space-around\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"space-around center\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"space-around start\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"space-around end\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"space-around stretch\"][data-yoo-form-input] {\n    -webkit-justify-content: space-around;\n    -ms-flex-pack: distribute;\n    justify-content: space-around; }\n  [attr-layout-align-gt-xs=\"space-between\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"space-between center\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"space-between start\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"space-between end\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"space-between stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n  [attr-layout-align-gt-xs=\"start start\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"center start\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"end start\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"space-between start\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"space-around start\"][data-yoo-form-input] {\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n    -webkit-align-content: flex-start;\n    -ms-flex-line-pack: start;\n    align-content: flex-start; }\n  [attr-layout-align-gt-xs=\"start center\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"center center\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"end center\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"space-between center\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"space-around center\"][data-yoo-form-input] {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-align-content: center;\n    -ms-flex-line-pack: center;\n    align-content: center;\n    max-width: 100%; }\n  [attr-layout-align-gt-xs=\"start center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-gt-xs=\"center center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-gt-xs=\"end center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-gt-xs=\"space-between center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-gt-xs=\"space-around center\"][data-yoo-form-input]    > *[data-yoo-form-input] {\n    max-width: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout-align-gt-xs=\"start end\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"center end\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"end end\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"space-between end\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"space-around end\"][data-yoo-form-input] {\n    -webkit-box-align: end;\n    -webkit-align-items: flex-end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n    -webkit-align-content: flex-end;\n    -ms-flex-line-pack: end;\n    align-content: flex-end; }\n  [attr-layout-align-gt-xs=\"start stretch\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"center stretch\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"end stretch\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"space-between stretch\"][data-yoo-form-input], [attr-layout-align-gt-xs=\"space-around stretch\"][data-yoo-form-input] {\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    -webkit-align-content: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch; }\n  [attr-flex-gt-xs][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; } }\n\n\@media screen\\0  and (min-width: 600px) {\n  [attr-flex-gt-xs][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%; } }\n\n\@media (min-width: 600px) {\n  [attr-flex-gt-xs-grow][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs-initial][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 auto;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs-auto][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs-none][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs-noshrink][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 auto;\n    -ms-flex: 1 0 auto;\n    flex: 1 0 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs-nogrow][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 auto;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 0%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"0\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 0%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"0\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 100%;\n    max-height: 0%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 5%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"5\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 5%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"5\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 100%;\n    max-height: 5%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 10%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"10\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 10%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"10\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 100%;\n    max-height: 10%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 15%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"15\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 15%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"15\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 100%;\n    max-height: 15%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 20%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"20\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 20%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"20\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 100%;\n    max-height: 20%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 25%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"25\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 25%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"25\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 100%;\n    max-height: 25%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 30%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"30\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 30%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"30\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 100%;\n    max-height: 30%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 35%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"35\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 35%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"35\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 100%;\n    max-height: 35%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 40%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"40\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 40%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"40\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 100%;\n    max-height: 40%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 45%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"45\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 45%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"45\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 100%;\n    max-height: 45%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 50%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"50\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 50%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"50\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 100%;\n    max-height: 50%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 55%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"55\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 55%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"55\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 100%;\n    max-height: 55%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 60%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"60\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 60%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"60\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 100%;\n    max-height: 60%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 65%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"65\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 65%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"65\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 100%;\n    max-height: 65%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 70%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"70\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 70%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"70\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 100%;\n    max-height: 70%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 75%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"75\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 75%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"75\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 100%;\n    max-height: 75%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 80%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"80\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 80%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"80\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 100%;\n    max-height: 80%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 85%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"85\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 85%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"85\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 100%;\n    max-height: 85%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 90%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"90\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 90%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"90\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 100%;\n    max-height: 90%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 95%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"95\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 95%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"95\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 100%;\n    max-height: 95%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-xs=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"100\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"100\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"33\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"33\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"33\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"33\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 33%;\n    -ms-flex: 1 1 33%;\n    flex: 1 1 33%;\n    max-width: calc(100% / 3);\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"34\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"34\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"34\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"34\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 34%;\n    -ms-flex: 1 1 34%;\n    flex: 1 1 34%;\n    max-width: 34%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"66\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"66\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"66\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"66\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 66%;\n    -ms-flex: 1 1 66%;\n    flex: 1 1 66%;\n    max-width: calc(200% / 3);\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"67\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"67\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"67\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"67\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 67%;\n    -ms-flex: 1 1 67%;\n    flex: 1 1 67%;\n    max-width: 67%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"33\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"33\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"33\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"33\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 33%;\n    -ms-flex: 1 1 33%;\n    flex: 1 1 33%;\n    max-width: 100%;\n    max-height: calc(100% / 3);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"34\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"34\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"34\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"34\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 34%;\n    -ms-flex: 1 1 34%;\n    flex: 1 1 34%;\n    max-width: 100%;\n    max-height: 34%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"66\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"66\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"66\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"66\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 66%;\n    -ms-flex: 1 1 66%;\n    flex: 1 1 66%;\n    max-width: 100%;\n    max-height: calc(200% / 3);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"67\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"67\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"67\"][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input]    > [attr-flex-gt-xs=\"67\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 67%;\n    -ms-flex: 1 1 67%;\n    flex: 1 1 67%;\n    max-width: 100%;\n    max-height: 67%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout-gt-xs][data-yoo-form-input], [attr-layout-gt-xs=\"column\"][data-yoo-form-input], [attr-layout-gt-xs=\"row\"][data-yoo-form-input] {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex; }\n  [attr-layout-gt-xs=\"column\"][data-yoo-form-input] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column; }\n  [attr-layout-gt-xs=\"row\"][data-yoo-form-input] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row; } }\n\n\@media (min-width: 600px) and (max-width: 959px) {\n  [attr-hide-sm][data-yoo-form-input]:not([attr-show-gt-xs]):not([attr-show-sm]):not([attr-show]), [attr-hide-gt-xs][data-yoo-form-input]:not([attr-show-gt-xs]):not([attr-show-sm]):not([attr-show]) {\n    display: none; }\n  [attr-hide-sm][data-yoo-form-input]:not([attr-show-sm]):not([attr-show]) {\n    display: none; }\n  [attr-flex-order-sm=\"-20\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -19;\n    -webkit-order: -20;\n    -ms-flex-order: -20;\n    order: -20; }\n  [attr-flex-order-sm=\"-19\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -18;\n    -webkit-order: -19;\n    -ms-flex-order: -19;\n    order: -19; }\n  [attr-flex-order-sm=\"-18\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -17;\n    -webkit-order: -18;\n    -ms-flex-order: -18;\n    order: -18; }\n  [attr-flex-order-sm=\"-17\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -16;\n    -webkit-order: -17;\n    -ms-flex-order: -17;\n    order: -17; }\n  [attr-flex-order-sm=\"-16\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -15;\n    -webkit-order: -16;\n    -ms-flex-order: -16;\n    order: -16; }\n  [attr-flex-order-sm=\"-15\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -14;\n    -webkit-order: -15;\n    -ms-flex-order: -15;\n    order: -15; }\n  [attr-flex-order-sm=\"-14\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -13;\n    -webkit-order: -14;\n    -ms-flex-order: -14;\n    order: -14; }\n  [attr-flex-order-sm=\"-13\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -12;\n    -webkit-order: -13;\n    -ms-flex-order: -13;\n    order: -13; }\n  [attr-flex-order-sm=\"-12\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -11;\n    -webkit-order: -12;\n    -ms-flex-order: -12;\n    order: -12; }\n  [attr-flex-order-sm=\"-11\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -10;\n    -webkit-order: -11;\n    -ms-flex-order: -11;\n    order: -11; }\n  [attr-flex-order-sm=\"-10\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -9;\n    -webkit-order: -10;\n    -ms-flex-order: -10;\n    order: -10; }\n  [attr-flex-order-sm=\"-9\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -8;\n    -webkit-order: -9;\n    -ms-flex-order: -9;\n    order: -9; }\n  [attr-flex-order-sm=\"-8\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -7;\n    -webkit-order: -8;\n    -ms-flex-order: -8;\n    order: -8; }\n  [attr-flex-order-sm=\"-7\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -6;\n    -webkit-order: -7;\n    -ms-flex-order: -7;\n    order: -7; }\n  [attr-flex-order-sm=\"-6\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -5;\n    -webkit-order: -6;\n    -ms-flex-order: -6;\n    order: -6; }\n  [attr-flex-order-sm=\"-5\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -4;\n    -webkit-order: -5;\n    -ms-flex-order: -5;\n    order: -5; }\n  [attr-flex-order-sm=\"-4\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -3;\n    -webkit-order: -4;\n    -ms-flex-order: -4;\n    order: -4; }\n  [attr-flex-order-sm=\"-3\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -2;\n    -webkit-order: -3;\n    -ms-flex-order: -3;\n    order: -3; }\n  [attr-flex-order-sm=\"-2\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -1;\n    -webkit-order: -2;\n    -ms-flex-order: -2;\n    order: -2; }\n  [attr-flex-order-sm=\"-1\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n    -ms-flex-order: -1;\n    order: -1; }\n  [attr-flex-order-sm=\"0\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n    -ms-flex-order: 0;\n    order: 0; }\n  [attr-flex-order-sm=\"1\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n    -ms-flex-order: 1;\n    order: 1; }\n  [attr-flex-order-sm=\"2\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n    -ms-flex-order: 2;\n    order: 2; }\n  [attr-flex-order-sm=\"3\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n    -ms-flex-order: 3;\n    order: 3; }\n  [attr-flex-order-sm=\"4\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n    -ms-flex-order: 4;\n    order: 4; }\n  [attr-flex-order-sm=\"5\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n    -ms-flex-order: 5;\n    order: 5; }\n  [attr-flex-order-sm=\"6\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n    -ms-flex-order: 6;\n    order: 6; }\n  [attr-flex-order-sm=\"7\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n    -ms-flex-order: 7;\n    order: 7; }\n  [attr-flex-order-sm=\"8\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n    -ms-flex-order: 8;\n    order: 8; }\n  [attr-flex-order-sm=\"9\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n    -ms-flex-order: 9;\n    order: 9; }\n  [attr-flex-order-sm=\"10\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n    -ms-flex-order: 10;\n    order: 10; }\n  [attr-flex-order-sm=\"11\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n    -ms-flex-order: 11;\n    order: 11; }\n  [attr-flex-order-sm=\"12\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n    -ms-flex-order: 12;\n    order: 12; }\n  [attr-flex-order-sm=\"13\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n    -ms-flex-order: 13;\n    order: 13; }\n  [attr-flex-order-sm=\"14\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 15;\n    -webkit-order: 14;\n    -ms-flex-order: 14;\n    order: 14; }\n  [attr-flex-order-sm=\"15\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 16;\n    -webkit-order: 15;\n    -ms-flex-order: 15;\n    order: 15; }\n  [attr-flex-order-sm=\"16\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 17;\n    -webkit-order: 16;\n    -ms-flex-order: 16;\n    order: 16; }\n  [attr-flex-order-sm=\"17\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 18;\n    -webkit-order: 17;\n    -ms-flex-order: 17;\n    order: 17; }\n  [attr-flex-order-sm=\"18\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 19;\n    -webkit-order: 18;\n    -ms-flex-order: 18;\n    order: 18; }\n  [attr-flex-order-sm=\"19\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 20;\n    -webkit-order: 19;\n    -ms-flex-order: 19;\n    order: 19; }\n  [attr-flex-order-sm=\"20\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 21;\n    -webkit-order: 20;\n    -ms-flex-order: 20;\n    order: 20; }\n  [attr-flex-offset-sm=\"0\"][data-yoo-form-input] {\n    margin-left: 0%; }\n  [attr-flex-offset-sm=\"5\"][data-yoo-form-input] {\n    margin-left: 5%; }\n  [attr-flex-offset-sm=\"10\"][data-yoo-form-input] {\n    margin-left: 10%; }\n  [attr-flex-offset-sm=\"15\"][data-yoo-form-input] {\n    margin-left: 15%; }\n  [attr-flex-offset-sm=\"20\"][data-yoo-form-input] {\n    margin-left: 20%; }\n  [attr-flex-offset-sm=\"25\"][data-yoo-form-input] {\n    margin-left: 25%; }\n  [attr-flex-offset-sm=\"30\"][data-yoo-form-input] {\n    margin-left: 30%; }\n  [attr-flex-offset-sm=\"35\"][data-yoo-form-input] {\n    margin-left: 35%; }\n  [attr-flex-offset-sm=\"40\"][data-yoo-form-input] {\n    margin-left: 40%; }\n  [attr-flex-offset-sm=\"45\"][data-yoo-form-input] {\n    margin-left: 45%; }\n  [attr-flex-offset-sm=\"50\"][data-yoo-form-input] {\n    margin-left: 50%; }\n  [attr-flex-offset-sm=\"55\"][data-yoo-form-input] {\n    margin-left: 55%; }\n  [attr-flex-offset-sm=\"60\"][data-yoo-form-input] {\n    margin-left: 60%; }\n  [attr-flex-offset-sm=\"65\"][data-yoo-form-input] {\n    margin-left: 65%; }\n  [attr-flex-offset-sm=\"70\"][data-yoo-form-input] {\n    margin-left: 70%; }\n  [attr-flex-offset-sm=\"75\"][data-yoo-form-input] {\n    margin-left: 75%; }\n  [attr-flex-offset-sm=\"80\"][data-yoo-form-input] {\n    margin-left: 80%; }\n  [attr-flex-offset-sm=\"85\"][data-yoo-form-input] {\n    margin-left: 85%; }\n  [attr-flex-offset-sm=\"90\"][data-yoo-form-input] {\n    margin-left: 90%; }\n  [attr-flex-offset-sm=\"95\"][data-yoo-form-input] {\n    margin-left: 95%; }\n  [attr-flex-offset-sm=\"33\"][data-yoo-form-input] {\n    margin-left: calc(100% / 3); }\n  [attr-flex-offset-sm=\"66\"][data-yoo-form-input] {\n    margin-left: calc(200% / 3); }\n  [attr-layout-align-sm][data-yoo-form-input], [attr-layout-align-sm=\"start stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    -webkit-align-content: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch;\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch; }\n  [attr-layout-align-sm=\"start\"][data-yoo-form-input], [attr-layout-align-sm=\"start start\"][data-yoo-form-input], [attr-layout-align-sm=\"start center\"][data-yoo-form-input], [attr-layout-align-sm=\"start end\"][data-yoo-form-input], [attr-layout-align-sm=\"start stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: start;\n    -webkit-justify-content: start;\n    -ms-flex-pack: start;\n    justify-content: start; }\n  [attr-layout-align-sm=\"center\"][data-yoo-form-input], [attr-layout-align-sm=\"center start\"][data-yoo-form-input], [attr-layout-align-sm=\"center center\"][data-yoo-form-input], [attr-layout-align-sm=\"center end\"][data-yoo-form-input], [attr-layout-align-sm=\"center stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center; }\n  [attr-layout-align-sm=\"end\"][data-yoo-form-input], [attr-layout-align-sm=\"end center\"][data-yoo-form-input], [attr-layout-align-sm=\"end start\"][data-yoo-form-input], [attr-layout-align-sm=\"end end\"][data-yoo-form-input], [attr-layout-align-sm=\"end stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n    -ms-flex-pack: end;\n    justify-content: flex-end; }\n  [attr-layout-align-sm=\"space-around\"][data-yoo-form-input], [attr-layout-align-sm=\"space-around center\"][data-yoo-form-input], [attr-layout-align-sm=\"space-around start\"][data-yoo-form-input], [attr-layout-align-sm=\"space-around end\"][data-yoo-form-input], [attr-layout-align-sm=\"space-around stretch\"][data-yoo-form-input] {\n    -webkit-justify-content: space-around;\n    -ms-flex-pack: distribute;\n    justify-content: space-around; }\n  [attr-layout-align-sm=\"space-between\"][data-yoo-form-input], [attr-layout-align-sm=\"space-between center\"][data-yoo-form-input], [attr-layout-align-sm=\"space-between start\"][data-yoo-form-input], [attr-layout-align-sm=\"space-between end\"][data-yoo-form-input], [attr-layout-align-sm=\"space-between stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n  [attr-layout-align-sm=\"start start\"][data-yoo-form-input], [attr-layout-align-sm=\"center start\"][data-yoo-form-input], [attr-layout-align-sm=\"end start\"][data-yoo-form-input], [attr-layout-align-sm=\"space-between start\"][data-yoo-form-input], [attr-layout-align-sm=\"space-around start\"][data-yoo-form-input] {\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n    -webkit-align-content: flex-start;\n    -ms-flex-line-pack: start;\n    align-content: flex-start; }\n  [attr-layout-align-sm=\"start center\"][data-yoo-form-input], [attr-layout-align-sm=\"center center\"][data-yoo-form-input], [attr-layout-align-sm=\"end center\"][data-yoo-form-input], [attr-layout-align-sm=\"space-between center\"][data-yoo-form-input], [attr-layout-align-sm=\"space-around center\"][data-yoo-form-input] {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-align-content: center;\n    -ms-flex-line-pack: center;\n    align-content: center;\n    max-width: 100%; }\n  [attr-layout-align-sm=\"start center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-sm=\"center center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-sm=\"end center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-sm=\"space-between center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-sm=\"space-around center\"][data-yoo-form-input]    > *[data-yoo-form-input] {\n    max-width: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout-align-sm=\"start end\"][data-yoo-form-input], [attr-layout-align-sm=\"center end\"][data-yoo-form-input], [attr-layout-align-sm=\"end end\"][data-yoo-form-input], [attr-layout-align-sm=\"space-between end\"][data-yoo-form-input], [attr-layout-align-sm=\"space-around end\"][data-yoo-form-input] {\n    -webkit-box-align: end;\n    -webkit-align-items: flex-end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n    -webkit-align-content: flex-end;\n    -ms-flex-line-pack: end;\n    align-content: flex-end; }\n  [attr-layout-align-sm=\"start stretch\"][data-yoo-form-input], [attr-layout-align-sm=\"center stretch\"][data-yoo-form-input], [attr-layout-align-sm=\"end stretch\"][data-yoo-form-input], [attr-layout-align-sm=\"space-between stretch\"][data-yoo-form-input], [attr-layout-align-sm=\"space-around stretch\"][data-yoo-form-input] {\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    -webkit-align-content: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch; }\n  [attr-flex-sm][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; } }\n\n\@media screen\\0  and (min-width: 600px) and (max-width: 959px) {\n  [attr-flex-sm][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%; } }\n\n\@media (min-width: 600px) and (max-width: 959px) {\n  [attr-flex-sm-grow][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm-initial][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 auto;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm-auto][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm-none][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm-noshrink][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 auto;\n    -ms-flex: 1 0 auto;\n    flex: 1 0 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm-nogrow][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 auto;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 0%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"0\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 0%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"0\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 100%;\n    max-height: 0%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 5%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"5\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 5%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"5\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 100%;\n    max-height: 5%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 10%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"10\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 10%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"10\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 100%;\n    max-height: 10%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 15%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"15\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 15%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"15\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 100%;\n    max-height: 15%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 20%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"20\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 20%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"20\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 100%;\n    max-height: 20%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 25%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"25\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 25%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"25\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 100%;\n    max-height: 25%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 30%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"30\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 30%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"30\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 100%;\n    max-height: 30%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 35%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"35\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 35%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"35\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 100%;\n    max-height: 35%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 40%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"40\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 40%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"40\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 100%;\n    max-height: 40%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 45%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"45\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 45%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"45\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 100%;\n    max-height: 45%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 50%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"50\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 50%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"50\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 100%;\n    max-height: 50%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 55%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"55\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 55%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"55\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 100%;\n    max-height: 55%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 60%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"60\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 60%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"60\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 100%;\n    max-height: 60%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 65%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"65\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 65%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"65\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 100%;\n    max-height: 65%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 70%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"70\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 70%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"70\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 100%;\n    max-height: 70%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 75%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"75\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 75%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"75\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 100%;\n    max-height: 75%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 80%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"80\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 80%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"80\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 100%;\n    max-height: 80%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 85%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"85\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 85%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"85\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 100%;\n    max-height: 85%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 90%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"90\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 90%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"90\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 100%;\n    max-height: 90%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 95%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"95\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 95%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"95\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 100%;\n    max-height: 95%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-sm=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"100\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"100\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"33\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"33\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"33\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"33\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 33%;\n    -ms-flex: 1 1 33%;\n    flex: 1 1 33%;\n    max-width: calc(100% / 3);\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"34\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"34\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"34\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"34\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 34%;\n    -ms-flex: 1 1 34%;\n    flex: 1 1 34%;\n    max-width: 34%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"66\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"66\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"66\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"66\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 66%;\n    -ms-flex: 1 1 66%;\n    flex: 1 1 66%;\n    max-width: calc(200% / 3);\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"67\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"67\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"67\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input]    > [attr-flex-sm=\"67\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 67%;\n    -ms-flex: 1 1 67%;\n    flex: 1 1 67%;\n    max-width: 67%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"33\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"33\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"33\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"33\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 33%;\n    -ms-flex: 1 1 33%;\n    flex: 1 1 33%;\n    max-width: 100%;\n    max-height: calc(100% / 3);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"34\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"34\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"34\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"34\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 34%;\n    -ms-flex: 1 1 34%;\n    flex: 1 1 34%;\n    max-width: 100%;\n    max-height: 34%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"66\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"66\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"66\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"66\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 66%;\n    -ms-flex: 1 1 66%;\n    flex: 1 1 66%;\n    max-width: 100%;\n    max-height: calc(200% / 3);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"67\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"67\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"67\"][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input]    > [attr-flex-sm=\"67\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 67%;\n    -ms-flex: 1 1 67%;\n    flex: 1 1 67%;\n    max-width: 100%;\n    max-height: 67%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout-sm][data-yoo-form-input], [attr-layout-sm=\"column\"][data-yoo-form-input], [attr-layout-sm=\"row\"][data-yoo-form-input] {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex; }\n  [attr-layout-sm=\"column\"][data-yoo-form-input] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column; }\n  [attr-layout-sm=\"row\"][data-yoo-form-input] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row; } }\n\n\@media (min-width: 960px) {\n  [attr-flex-order-gt-sm=\"-20\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -19;\n    -webkit-order: -20;\n    -ms-flex-order: -20;\n    order: -20; }\n  [attr-flex-order-gt-sm=\"-19\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -18;\n    -webkit-order: -19;\n    -ms-flex-order: -19;\n    order: -19; }\n  [attr-flex-order-gt-sm=\"-18\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -17;\n    -webkit-order: -18;\n    -ms-flex-order: -18;\n    order: -18; }\n  [attr-flex-order-gt-sm=\"-17\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -16;\n    -webkit-order: -17;\n    -ms-flex-order: -17;\n    order: -17; }\n  [attr-flex-order-gt-sm=\"-16\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -15;\n    -webkit-order: -16;\n    -ms-flex-order: -16;\n    order: -16; }\n  [attr-flex-order-gt-sm=\"-15\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -14;\n    -webkit-order: -15;\n    -ms-flex-order: -15;\n    order: -15; }\n  [attr-flex-order-gt-sm=\"-14\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -13;\n    -webkit-order: -14;\n    -ms-flex-order: -14;\n    order: -14; }\n  [attr-flex-order-gt-sm=\"-13\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -12;\n    -webkit-order: -13;\n    -ms-flex-order: -13;\n    order: -13; }\n  [attr-flex-order-gt-sm=\"-12\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -11;\n    -webkit-order: -12;\n    -ms-flex-order: -12;\n    order: -12; }\n  [attr-flex-order-gt-sm=\"-11\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -10;\n    -webkit-order: -11;\n    -ms-flex-order: -11;\n    order: -11; }\n  [attr-flex-order-gt-sm=\"-10\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -9;\n    -webkit-order: -10;\n    -ms-flex-order: -10;\n    order: -10; }\n  [attr-flex-order-gt-sm=\"-9\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -8;\n    -webkit-order: -9;\n    -ms-flex-order: -9;\n    order: -9; }\n  [attr-flex-order-gt-sm=\"-8\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -7;\n    -webkit-order: -8;\n    -ms-flex-order: -8;\n    order: -8; }\n  [attr-flex-order-gt-sm=\"-7\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -6;\n    -webkit-order: -7;\n    -ms-flex-order: -7;\n    order: -7; }\n  [attr-flex-order-gt-sm=\"-6\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -5;\n    -webkit-order: -6;\n    -ms-flex-order: -6;\n    order: -6; }\n  [attr-flex-order-gt-sm=\"-5\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -4;\n    -webkit-order: -5;\n    -ms-flex-order: -5;\n    order: -5; }\n  [attr-flex-order-gt-sm=\"-4\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -3;\n    -webkit-order: -4;\n    -ms-flex-order: -4;\n    order: -4; }\n  [attr-flex-order-gt-sm=\"-3\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -2;\n    -webkit-order: -3;\n    -ms-flex-order: -3;\n    order: -3; }\n  [attr-flex-order-gt-sm=\"-2\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -1;\n    -webkit-order: -2;\n    -ms-flex-order: -2;\n    order: -2; }\n  [attr-flex-order-gt-sm=\"-1\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n    -ms-flex-order: -1;\n    order: -1; }\n  [attr-flex-order-gt-sm=\"0\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n    -ms-flex-order: 0;\n    order: 0; }\n  [attr-flex-order-gt-sm=\"1\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n    -ms-flex-order: 1;\n    order: 1; }\n  [attr-flex-order-gt-sm=\"2\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n    -ms-flex-order: 2;\n    order: 2; }\n  [attr-flex-order-gt-sm=\"3\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n    -ms-flex-order: 3;\n    order: 3; }\n  [attr-flex-order-gt-sm=\"4\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n    -ms-flex-order: 4;\n    order: 4; }\n  [attr-flex-order-gt-sm=\"5\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n    -ms-flex-order: 5;\n    order: 5; }\n  [attr-flex-order-gt-sm=\"6\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n    -ms-flex-order: 6;\n    order: 6; }\n  [attr-flex-order-gt-sm=\"7\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n    -ms-flex-order: 7;\n    order: 7; }\n  [attr-flex-order-gt-sm=\"8\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n    -ms-flex-order: 8;\n    order: 8; }\n  [attr-flex-order-gt-sm=\"9\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n    -ms-flex-order: 9;\n    order: 9; }\n  [attr-flex-order-gt-sm=\"10\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n    -ms-flex-order: 10;\n    order: 10; }\n  [attr-flex-order-gt-sm=\"11\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n    -ms-flex-order: 11;\n    order: 11; }\n  [attr-flex-order-gt-sm=\"12\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n    -ms-flex-order: 12;\n    order: 12; }\n  [attr-flex-order-gt-sm=\"13\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n    -ms-flex-order: 13;\n    order: 13; }\n  [attr-flex-order-gt-sm=\"14\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 15;\n    -webkit-order: 14;\n    -ms-flex-order: 14;\n    order: 14; }\n  [attr-flex-order-gt-sm=\"15\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 16;\n    -webkit-order: 15;\n    -ms-flex-order: 15;\n    order: 15; }\n  [attr-flex-order-gt-sm=\"16\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 17;\n    -webkit-order: 16;\n    -ms-flex-order: 16;\n    order: 16; }\n  [attr-flex-order-gt-sm=\"17\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 18;\n    -webkit-order: 17;\n    -ms-flex-order: 17;\n    order: 17; }\n  [attr-flex-order-gt-sm=\"18\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 19;\n    -webkit-order: 18;\n    -ms-flex-order: 18;\n    order: 18; }\n  [attr-flex-order-gt-sm=\"19\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 20;\n    -webkit-order: 19;\n    -ms-flex-order: 19;\n    order: 19; }\n  [attr-flex-order-gt-sm=\"20\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 21;\n    -webkit-order: 20;\n    -ms-flex-order: 20;\n    order: 20; }\n  [attr-flex-offset-gt-sm=\"0\"][data-yoo-form-input] {\n    margin-left: 0%; }\n  [attr-flex-offset-gt-sm=\"5\"][data-yoo-form-input] {\n    margin-left: 5%; }\n  [attr-flex-offset-gt-sm=\"10\"][data-yoo-form-input] {\n    margin-left: 10%; }\n  [attr-flex-offset-gt-sm=\"15\"][data-yoo-form-input] {\n    margin-left: 15%; }\n  [attr-flex-offset-gt-sm=\"20\"][data-yoo-form-input] {\n    margin-left: 20%; }\n  [attr-flex-offset-gt-sm=\"25\"][data-yoo-form-input] {\n    margin-left: 25%; }\n  [attr-flex-offset-gt-sm=\"30\"][data-yoo-form-input] {\n    margin-left: 30%; }\n  [attr-flex-offset-gt-sm=\"35\"][data-yoo-form-input] {\n    margin-left: 35%; }\n  [attr-flex-offset-gt-sm=\"40\"][data-yoo-form-input] {\n    margin-left: 40%; }\n  [attr-flex-offset-gt-sm=\"45\"][data-yoo-form-input] {\n    margin-left: 45%; }\n  [attr-flex-offset-gt-sm=\"50\"][data-yoo-form-input] {\n    margin-left: 50%; }\n  [attr-flex-offset-gt-sm=\"55\"][data-yoo-form-input] {\n    margin-left: 55%; }\n  [attr-flex-offset-gt-sm=\"60\"][data-yoo-form-input] {\n    margin-left: 60%; }\n  [attr-flex-offset-gt-sm=\"65\"][data-yoo-form-input] {\n    margin-left: 65%; }\n  [attr-flex-offset-gt-sm=\"70\"][data-yoo-form-input] {\n    margin-left: 70%; }\n  [attr-flex-offset-gt-sm=\"75\"][data-yoo-form-input] {\n    margin-left: 75%; }\n  [attr-flex-offset-gt-sm=\"80\"][data-yoo-form-input] {\n    margin-left: 80%; }\n  [attr-flex-offset-gt-sm=\"85\"][data-yoo-form-input] {\n    margin-left: 85%; }\n  [attr-flex-offset-gt-sm=\"90\"][data-yoo-form-input] {\n    margin-left: 90%; }\n  [attr-flex-offset-gt-sm=\"95\"][data-yoo-form-input] {\n    margin-left: 95%; }\n  [attr-flex-offset-gt-sm=\"33\"][data-yoo-form-input] {\n    margin-left: calc(100% / 3); }\n  [attr-flex-offset-gt-sm=\"66\"][data-yoo-form-input] {\n    margin-left: calc(200% / 3); }\n  [attr-layout-align-gt-sm][data-yoo-form-input], [attr-layout-align-gt-sm=\"start stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    -webkit-align-content: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch;\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch; }\n  [attr-layout-align-gt-sm=\"start\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"start start\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"start center\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"start end\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"start stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: start;\n    -webkit-justify-content: start;\n    -ms-flex-pack: start;\n    justify-content: start; }\n  [attr-layout-align-gt-sm=\"center\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"center start\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"center center\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"center end\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"center stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center; }\n  [attr-layout-align-gt-sm=\"end\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"end center\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"end start\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"end end\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"end stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n    -ms-flex-pack: end;\n    justify-content: flex-end; }\n  [attr-layout-align-gt-sm=\"space-around\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"space-around center\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"space-around start\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"space-around end\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"space-around stretch\"][data-yoo-form-input] {\n    -webkit-justify-content: space-around;\n    -ms-flex-pack: distribute;\n    justify-content: space-around; }\n  [attr-layout-align-gt-sm=\"space-between\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"space-between center\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"space-between start\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"space-between end\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"space-between stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n  [attr-layout-align-gt-sm=\"start start\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"center start\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"end start\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"space-between start\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"space-around start\"][data-yoo-form-input] {\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n    -webkit-align-content: flex-start;\n    -ms-flex-line-pack: start;\n    align-content: flex-start; }\n  [attr-layout-align-gt-sm=\"start center\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"center center\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"end center\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"space-between center\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"space-around center\"][data-yoo-form-input] {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-align-content: center;\n    -ms-flex-line-pack: center;\n    align-content: center;\n    max-width: 100%; }\n  [attr-layout-align-gt-sm=\"start center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-gt-sm=\"center center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-gt-sm=\"end center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-gt-sm=\"space-between center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-gt-sm=\"space-around center\"][data-yoo-form-input]    > *[data-yoo-form-input] {\n    max-width: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout-align-gt-sm=\"start end\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"center end\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"end end\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"space-between end\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"space-around end\"][data-yoo-form-input] {\n    -webkit-box-align: end;\n    -webkit-align-items: flex-end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n    -webkit-align-content: flex-end;\n    -ms-flex-line-pack: end;\n    align-content: flex-end; }\n  [attr-layout-align-gt-sm=\"start stretch\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"center stretch\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"end stretch\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"space-between stretch\"][data-yoo-form-input], [attr-layout-align-gt-sm=\"space-around stretch\"][data-yoo-form-input] {\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    -webkit-align-content: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch; }\n  [attr-flex-gt-sm][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; } }\n\n\@media screen\\0  and (min-width: 960px) {\n  [attr-flex-gt-sm][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%; } }\n\n\@media (min-width: 960px) {\n  [attr-flex-gt-sm-grow][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm-initial][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 auto;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm-auto][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm-none][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm-noshrink][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 auto;\n    -ms-flex: 1 0 auto;\n    flex: 1 0 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm-nogrow][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 auto;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 0%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"0\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 0%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"0\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 100%;\n    max-height: 0%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 5%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"5\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 5%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"5\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 100%;\n    max-height: 5%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 10%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"10\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 10%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"10\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 100%;\n    max-height: 10%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 15%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"15\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 15%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"15\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 100%;\n    max-height: 15%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 20%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"20\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 20%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"20\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 100%;\n    max-height: 20%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 25%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"25\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 25%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"25\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 100%;\n    max-height: 25%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 30%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"30\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 30%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"30\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 100%;\n    max-height: 30%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 35%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"35\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 35%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"35\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 100%;\n    max-height: 35%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 40%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"40\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 40%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"40\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 100%;\n    max-height: 40%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 45%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"45\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 45%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"45\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 100%;\n    max-height: 45%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 50%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"50\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 50%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"50\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 100%;\n    max-height: 50%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 55%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"55\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 55%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"55\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 100%;\n    max-height: 55%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 60%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"60\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 60%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"60\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 100%;\n    max-height: 60%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 65%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"65\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 65%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"65\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 100%;\n    max-height: 65%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 70%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"70\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 70%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"70\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 100%;\n    max-height: 70%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 75%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"75\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 75%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"75\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 100%;\n    max-height: 75%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 80%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"80\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 80%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"80\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 100%;\n    max-height: 80%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 85%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"85\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 85%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"85\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 100%;\n    max-height: 85%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 90%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"90\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 90%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"90\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 100%;\n    max-height: 90%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 95%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"95\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 95%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"95\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 100%;\n    max-height: 95%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-sm=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"100\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"100\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"33\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"33\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"33\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"33\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 33%;\n    -ms-flex: 1 1 33%;\n    flex: 1 1 33%;\n    max-width: calc(100% / 3);\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"34\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"34\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"34\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"34\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 34%;\n    -ms-flex: 1 1 34%;\n    flex: 1 1 34%;\n    max-width: 34%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"66\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"66\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"66\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"66\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 66%;\n    -ms-flex: 1 1 66%;\n    flex: 1 1 66%;\n    max-width: calc(200% / 3);\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"67\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"67\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"67\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"67\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 67%;\n    -ms-flex: 1 1 67%;\n    flex: 1 1 67%;\n    max-width: 67%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"33\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"33\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"33\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"33\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 33%;\n    -ms-flex: 1 1 33%;\n    flex: 1 1 33%;\n    max-width: 100%;\n    max-height: calc(100% / 3);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"34\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"34\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"34\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"34\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 34%;\n    -ms-flex: 1 1 34%;\n    flex: 1 1 34%;\n    max-width: 100%;\n    max-height: 34%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"66\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"66\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"66\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"66\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 66%;\n    -ms-flex: 1 1 66%;\n    flex: 1 1 66%;\n    max-width: 100%;\n    max-height: calc(200% / 3);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"67\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"67\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"67\"][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input]    > [attr-flex-gt-sm=\"67\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 67%;\n    -ms-flex: 1 1 67%;\n    flex: 1 1 67%;\n    max-width: 100%;\n    max-height: 67%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout-gt-sm][data-yoo-form-input], [attr-layout-gt-sm=\"column\"][data-yoo-form-input], [attr-layout-gt-sm=\"row\"][data-yoo-form-input] {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex; }\n  [attr-layout-gt-sm=\"column\"][data-yoo-form-input] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column; }\n  [attr-layout-gt-sm=\"row\"][data-yoo-form-input] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row; } }\n\n\@media (min-width: 960px) and (max-width: 1279px) {\n  [attr-hide][data-yoo-form-input]:not([attr-show-gt-xs]):not([attr-show-gt-sm]):not([attr-show-md]):not([attr-show]), [attr-hide-gt-xs][data-yoo-form-input]:not([attr-show-gt-xs]):not([attr-show-gt-sm]):not([attr-show-md]):not([attr-show]), [attr-hide-gt-sm][data-yoo-form-input]:not([attr-show-gt-xs]):not([attr-show-gt-sm]):not([attr-show-md]):not([attr-show]) {\n    display: none; }\n  [attr-hide-md][data-yoo-form-input]:not([attr-show-md]):not([attr-show]) {\n    display: none; }\n  [attr-flex-order-md=\"-20\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -19;\n    -webkit-order: -20;\n    -ms-flex-order: -20;\n    order: -20; }\n  [attr-flex-order-md=\"-19\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -18;\n    -webkit-order: -19;\n    -ms-flex-order: -19;\n    order: -19; }\n  [attr-flex-order-md=\"-18\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -17;\n    -webkit-order: -18;\n    -ms-flex-order: -18;\n    order: -18; }\n  [attr-flex-order-md=\"-17\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -16;\n    -webkit-order: -17;\n    -ms-flex-order: -17;\n    order: -17; }\n  [attr-flex-order-md=\"-16\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -15;\n    -webkit-order: -16;\n    -ms-flex-order: -16;\n    order: -16; }\n  [attr-flex-order-md=\"-15\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -14;\n    -webkit-order: -15;\n    -ms-flex-order: -15;\n    order: -15; }\n  [attr-flex-order-md=\"-14\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -13;\n    -webkit-order: -14;\n    -ms-flex-order: -14;\n    order: -14; }\n  [attr-flex-order-md=\"-13\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -12;\n    -webkit-order: -13;\n    -ms-flex-order: -13;\n    order: -13; }\n  [attr-flex-order-md=\"-12\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -11;\n    -webkit-order: -12;\n    -ms-flex-order: -12;\n    order: -12; }\n  [attr-flex-order-md=\"-11\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -10;\n    -webkit-order: -11;\n    -ms-flex-order: -11;\n    order: -11; }\n  [attr-flex-order-md=\"-10\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -9;\n    -webkit-order: -10;\n    -ms-flex-order: -10;\n    order: -10; }\n  [attr-flex-order-md=\"-9\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -8;\n    -webkit-order: -9;\n    -ms-flex-order: -9;\n    order: -9; }\n  [attr-flex-order-md=\"-8\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -7;\n    -webkit-order: -8;\n    -ms-flex-order: -8;\n    order: -8; }\n  [attr-flex-order-md=\"-7\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -6;\n    -webkit-order: -7;\n    -ms-flex-order: -7;\n    order: -7; }\n  [attr-flex-order-md=\"-6\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -5;\n    -webkit-order: -6;\n    -ms-flex-order: -6;\n    order: -6; }\n  [attr-flex-order-md=\"-5\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -4;\n    -webkit-order: -5;\n    -ms-flex-order: -5;\n    order: -5; }\n  [attr-flex-order-md=\"-4\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -3;\n    -webkit-order: -4;\n    -ms-flex-order: -4;\n    order: -4; }\n  [attr-flex-order-md=\"-3\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -2;\n    -webkit-order: -3;\n    -ms-flex-order: -3;\n    order: -3; }\n  [attr-flex-order-md=\"-2\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -1;\n    -webkit-order: -2;\n    -ms-flex-order: -2;\n    order: -2; }\n  [attr-flex-order-md=\"-1\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n    -ms-flex-order: -1;\n    order: -1; }\n  [attr-flex-order-md=\"0\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n    -ms-flex-order: 0;\n    order: 0; }\n  [attr-flex-order-md=\"1\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n    -ms-flex-order: 1;\n    order: 1; }\n  [attr-flex-order-md=\"2\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n    -ms-flex-order: 2;\n    order: 2; }\n  [attr-flex-order-md=\"3\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n    -ms-flex-order: 3;\n    order: 3; }\n  [attr-flex-order-md=\"4\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n    -ms-flex-order: 4;\n    order: 4; }\n  [attr-flex-order-md=\"5\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n    -ms-flex-order: 5;\n    order: 5; }\n  [attr-flex-order-md=\"6\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n    -ms-flex-order: 6;\n    order: 6; }\n  [attr-flex-order-md=\"7\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n    -ms-flex-order: 7;\n    order: 7; }\n  [attr-flex-order-md=\"8\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n    -ms-flex-order: 8;\n    order: 8; }\n  [attr-flex-order-md=\"9\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n    -ms-flex-order: 9;\n    order: 9; }\n  [attr-flex-order-md=\"10\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n    -ms-flex-order: 10;\n    order: 10; }\n  [attr-flex-order-md=\"11\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n    -ms-flex-order: 11;\n    order: 11; }\n  [attr-flex-order-md=\"12\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n    -ms-flex-order: 12;\n    order: 12; }\n  [attr-flex-order-md=\"13\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n    -ms-flex-order: 13;\n    order: 13; }\n  [attr-flex-order-md=\"14\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 15;\n    -webkit-order: 14;\n    -ms-flex-order: 14;\n    order: 14; }\n  [attr-flex-order-md=\"15\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 16;\n    -webkit-order: 15;\n    -ms-flex-order: 15;\n    order: 15; }\n  [attr-flex-order-md=\"16\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 17;\n    -webkit-order: 16;\n    -ms-flex-order: 16;\n    order: 16; }\n  [attr-flex-order-md=\"17\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 18;\n    -webkit-order: 17;\n    -ms-flex-order: 17;\n    order: 17; }\n  [attr-flex-order-md=\"18\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 19;\n    -webkit-order: 18;\n    -ms-flex-order: 18;\n    order: 18; }\n  [attr-flex-order-md=\"19\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 20;\n    -webkit-order: 19;\n    -ms-flex-order: 19;\n    order: 19; }\n  [attr-flex-order-md=\"20\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 21;\n    -webkit-order: 20;\n    -ms-flex-order: 20;\n    order: 20; }\n  [attr-flex-offset-md=\"0\"][data-yoo-form-input] {\n    margin-left: 0%; }\n  [attr-flex-offset-md=\"5\"][data-yoo-form-input] {\n    margin-left: 5%; }\n  [attr-flex-offset-md=\"10\"][data-yoo-form-input] {\n    margin-left: 10%; }\n  [attr-flex-offset-md=\"15\"][data-yoo-form-input] {\n    margin-left: 15%; }\n  [attr-flex-offset-md=\"20\"][data-yoo-form-input] {\n    margin-left: 20%; }\n  [attr-flex-offset-md=\"25\"][data-yoo-form-input] {\n    margin-left: 25%; }\n  [attr-flex-offset-md=\"30\"][data-yoo-form-input] {\n    margin-left: 30%; }\n  [attr-flex-offset-md=\"35\"][data-yoo-form-input] {\n    margin-left: 35%; }\n  [attr-flex-offset-md=\"40\"][data-yoo-form-input] {\n    margin-left: 40%; }\n  [attr-flex-offset-md=\"45\"][data-yoo-form-input] {\n    margin-left: 45%; }\n  [attr-flex-offset-md=\"50\"][data-yoo-form-input] {\n    margin-left: 50%; }\n  [attr-flex-offset-md=\"55\"][data-yoo-form-input] {\n    margin-left: 55%; }\n  [attr-flex-offset-md=\"60\"][data-yoo-form-input] {\n    margin-left: 60%; }\n  [attr-flex-offset-md=\"65\"][data-yoo-form-input] {\n    margin-left: 65%; }\n  [attr-flex-offset-md=\"70\"][data-yoo-form-input] {\n    margin-left: 70%; }\n  [attr-flex-offset-md=\"75\"][data-yoo-form-input] {\n    margin-left: 75%; }\n  [attr-flex-offset-md=\"80\"][data-yoo-form-input] {\n    margin-left: 80%; }\n  [attr-flex-offset-md=\"85\"][data-yoo-form-input] {\n    margin-left: 85%; }\n  [attr-flex-offset-md=\"90\"][data-yoo-form-input] {\n    margin-left: 90%; }\n  [attr-flex-offset-md=\"95\"][data-yoo-form-input] {\n    margin-left: 95%; }\n  [attr-flex-offset-md=\"33\"][data-yoo-form-input] {\n    margin-left: calc(100% / 3); }\n  [attr-flex-offset-md=\"66\"][data-yoo-form-input] {\n    margin-left: calc(200% / 3); }\n  [attr-layout-align-md][data-yoo-form-input], [attr-layout-align-md=\"start stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    -webkit-align-content: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch;\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch; }\n  [attr-layout-align-md=\"start\"][data-yoo-form-input], [attr-layout-align-md=\"start start\"][data-yoo-form-input], [attr-layout-align-md=\"start center\"][data-yoo-form-input], [attr-layout-align-md=\"start end\"][data-yoo-form-input], [attr-layout-align-md=\"start stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: start;\n    -webkit-justify-content: start;\n    -ms-flex-pack: start;\n    justify-content: start; }\n  [attr-layout-align-md=\"center\"][data-yoo-form-input], [attr-layout-align-md=\"center start\"][data-yoo-form-input], [attr-layout-align-md=\"center center\"][data-yoo-form-input], [attr-layout-align-md=\"center end\"][data-yoo-form-input], [attr-layout-align-md=\"center stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center; }\n  [attr-layout-align-md=\"end\"][data-yoo-form-input], [attr-layout-align-md=\"end center\"][data-yoo-form-input], [attr-layout-align-md=\"end start\"][data-yoo-form-input], [attr-layout-align-md=\"end end\"][data-yoo-form-input], [attr-layout-align-md=\"end stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n    -ms-flex-pack: end;\n    justify-content: flex-end; }\n  [attr-layout-align-md=\"space-around\"][data-yoo-form-input], [attr-layout-align-md=\"space-around center\"][data-yoo-form-input], [attr-layout-align-md=\"space-around start\"][data-yoo-form-input], [attr-layout-align-md=\"space-around end\"][data-yoo-form-input], [attr-layout-align-md=\"space-around stretch\"][data-yoo-form-input] {\n    -webkit-justify-content: space-around;\n    -ms-flex-pack: distribute;\n    justify-content: space-around; }\n  [attr-layout-align-md=\"space-between\"][data-yoo-form-input], [attr-layout-align-md=\"space-between center\"][data-yoo-form-input], [attr-layout-align-md=\"space-between start\"][data-yoo-form-input], [attr-layout-align-md=\"space-between end\"][data-yoo-form-input], [attr-layout-align-md=\"space-between stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n  [attr-layout-align-md=\"start start\"][data-yoo-form-input], [attr-layout-align-md=\"center start\"][data-yoo-form-input], [attr-layout-align-md=\"end start\"][data-yoo-form-input], [attr-layout-align-md=\"space-between start\"][data-yoo-form-input], [attr-layout-align-md=\"space-around start\"][data-yoo-form-input] {\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n    -webkit-align-content: flex-start;\n    -ms-flex-line-pack: start;\n    align-content: flex-start; }\n  [attr-layout-align-md=\"start center\"][data-yoo-form-input], [attr-layout-align-md=\"center center\"][data-yoo-form-input], [attr-layout-align-md=\"end center\"][data-yoo-form-input], [attr-layout-align-md=\"space-between center\"][data-yoo-form-input], [attr-layout-align-md=\"space-around center\"][data-yoo-form-input] {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-align-content: center;\n    -ms-flex-line-pack: center;\n    align-content: center;\n    max-width: 100%; }\n  [attr-layout-align-md=\"start center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-md=\"center center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-md=\"end center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-md=\"space-between center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-md=\"space-around center\"][data-yoo-form-input]    > *[data-yoo-form-input] {\n    max-width: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout-align-md=\"start end\"][data-yoo-form-input], [attr-layout-align-md=\"center end\"][data-yoo-form-input], [attr-layout-align-md=\"end end\"][data-yoo-form-input], [attr-layout-align-md=\"space-between end\"][data-yoo-form-input], [attr-layout-align-md=\"space-around end\"][data-yoo-form-input] {\n    -webkit-box-align: end;\n    -webkit-align-items: flex-end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n    -webkit-align-content: flex-end;\n    -ms-flex-line-pack: end;\n    align-content: flex-end; }\n  [attr-layout-align-md=\"start stretch\"][data-yoo-form-input], [attr-layout-align-md=\"center stretch\"][data-yoo-form-input], [attr-layout-align-md=\"end stretch\"][data-yoo-form-input], [attr-layout-align-md=\"space-between stretch\"][data-yoo-form-input], [attr-layout-align-md=\"space-around stretch\"][data-yoo-form-input] {\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    -webkit-align-content: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch; }\n  [attr-flex-md][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; } }\n\n\@media screen\\0  and (min-width: 960px) and (max-width: 1279px) {\n  [attr-flex-md][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%; } }\n\n\@media (min-width: 960px) and (max-width: 1279px) {\n  [attr-flex-md-grow][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md-initial][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 auto;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md-auto][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md-none][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md-noshrink][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 auto;\n    -ms-flex: 1 0 auto;\n    flex: 1 0 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md-nogrow][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 auto;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 0%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"0\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 0%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"0\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 100%;\n    max-height: 0%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 5%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"5\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 5%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"5\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 100%;\n    max-height: 5%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 10%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"10\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 10%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"10\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 100%;\n    max-height: 10%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 15%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"15\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 15%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"15\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 100%;\n    max-height: 15%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 20%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"20\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 20%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"20\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 100%;\n    max-height: 20%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 25%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"25\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 25%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"25\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 100%;\n    max-height: 25%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 30%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"30\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 30%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"30\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 100%;\n    max-height: 30%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 35%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"35\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 35%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"35\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 100%;\n    max-height: 35%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 40%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"40\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 40%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"40\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 100%;\n    max-height: 40%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 45%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"45\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 45%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"45\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 100%;\n    max-height: 45%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 50%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"50\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 50%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"50\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 100%;\n    max-height: 50%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 55%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"55\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 55%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"55\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 100%;\n    max-height: 55%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 60%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"60\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 60%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"60\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 100%;\n    max-height: 60%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 65%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"65\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 65%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"65\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 100%;\n    max-height: 65%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 70%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"70\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 70%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"70\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 100%;\n    max-height: 70%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 75%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"75\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 75%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"75\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 100%;\n    max-height: 75%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 80%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"80\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 80%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"80\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 100%;\n    max-height: 80%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 85%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"85\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 85%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"85\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 100%;\n    max-height: 85%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 90%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"90\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 90%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"90\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 100%;\n    max-height: 90%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 95%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"95\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 95%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"95\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 100%;\n    max-height: 95%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-md=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"100\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"100\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"33\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"33\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"33\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"33\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 33%;\n    -ms-flex: 1 1 33%;\n    flex: 1 1 33%;\n    max-width: calc(100% / 3);\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"34\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"34\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"34\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"34\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 34%;\n    -ms-flex: 1 1 34%;\n    flex: 1 1 34%;\n    max-width: 34%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"66\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"66\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"66\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"66\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 66%;\n    -ms-flex: 1 1 66%;\n    flex: 1 1 66%;\n    max-width: calc(200% / 3);\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"67\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"67\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"67\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input]    > [attr-flex-md=\"67\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 67%;\n    -ms-flex: 1 1 67%;\n    flex: 1 1 67%;\n    max-width: 67%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"33\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"33\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"33\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"33\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 33%;\n    -ms-flex: 1 1 33%;\n    flex: 1 1 33%;\n    max-width: 100%;\n    max-height: calc(100% / 3);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"34\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"34\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"34\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"34\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 34%;\n    -ms-flex: 1 1 34%;\n    flex: 1 1 34%;\n    max-width: 100%;\n    max-height: 34%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"66\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"66\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"66\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"66\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 66%;\n    -ms-flex: 1 1 66%;\n    flex: 1 1 66%;\n    max-width: 100%;\n    max-height: calc(200% / 3);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"67\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"67\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"67\"][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input]    > [attr-flex-md=\"67\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 67%;\n    -ms-flex: 1 1 67%;\n    flex: 1 1 67%;\n    max-width: 100%;\n    max-height: 67%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout-md][data-yoo-form-input], [attr-layout-md=\"column\"][data-yoo-form-input], [attr-layout-md=\"row\"][data-yoo-form-input] {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex; }\n  [attr-layout-md=\"column\"][data-yoo-form-input] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column; }\n  [attr-layout-md=\"row\"][data-yoo-form-input] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row; } }\n\n\@media (min-width: 1280px) {\n  [attr-flex-order-gt-md=\"-20\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -19;\n    -webkit-order: -20;\n    -ms-flex-order: -20;\n    order: -20; }\n  [attr-flex-order-gt-md=\"-19\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -18;\n    -webkit-order: -19;\n    -ms-flex-order: -19;\n    order: -19; }\n  [attr-flex-order-gt-md=\"-18\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -17;\n    -webkit-order: -18;\n    -ms-flex-order: -18;\n    order: -18; }\n  [attr-flex-order-gt-md=\"-17\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -16;\n    -webkit-order: -17;\n    -ms-flex-order: -17;\n    order: -17; }\n  [attr-flex-order-gt-md=\"-16\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -15;\n    -webkit-order: -16;\n    -ms-flex-order: -16;\n    order: -16; }\n  [attr-flex-order-gt-md=\"-15\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -14;\n    -webkit-order: -15;\n    -ms-flex-order: -15;\n    order: -15; }\n  [attr-flex-order-gt-md=\"-14\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -13;\n    -webkit-order: -14;\n    -ms-flex-order: -14;\n    order: -14; }\n  [attr-flex-order-gt-md=\"-13\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -12;\n    -webkit-order: -13;\n    -ms-flex-order: -13;\n    order: -13; }\n  [attr-flex-order-gt-md=\"-12\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -11;\n    -webkit-order: -12;\n    -ms-flex-order: -12;\n    order: -12; }\n  [attr-flex-order-gt-md=\"-11\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -10;\n    -webkit-order: -11;\n    -ms-flex-order: -11;\n    order: -11; }\n  [attr-flex-order-gt-md=\"-10\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -9;\n    -webkit-order: -10;\n    -ms-flex-order: -10;\n    order: -10; }\n  [attr-flex-order-gt-md=\"-9\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -8;\n    -webkit-order: -9;\n    -ms-flex-order: -9;\n    order: -9; }\n  [attr-flex-order-gt-md=\"-8\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -7;\n    -webkit-order: -8;\n    -ms-flex-order: -8;\n    order: -8; }\n  [attr-flex-order-gt-md=\"-7\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -6;\n    -webkit-order: -7;\n    -ms-flex-order: -7;\n    order: -7; }\n  [attr-flex-order-gt-md=\"-6\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -5;\n    -webkit-order: -6;\n    -ms-flex-order: -6;\n    order: -6; }\n  [attr-flex-order-gt-md=\"-5\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -4;\n    -webkit-order: -5;\n    -ms-flex-order: -5;\n    order: -5; }\n  [attr-flex-order-gt-md=\"-4\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -3;\n    -webkit-order: -4;\n    -ms-flex-order: -4;\n    order: -4; }\n  [attr-flex-order-gt-md=\"-3\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -2;\n    -webkit-order: -3;\n    -ms-flex-order: -3;\n    order: -3; }\n  [attr-flex-order-gt-md=\"-2\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -1;\n    -webkit-order: -2;\n    -ms-flex-order: -2;\n    order: -2; }\n  [attr-flex-order-gt-md=\"-1\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n    -ms-flex-order: -1;\n    order: -1; }\n  [attr-flex-order-gt-md=\"0\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n    -ms-flex-order: 0;\n    order: 0; }\n  [attr-flex-order-gt-md=\"1\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n    -ms-flex-order: 1;\n    order: 1; }\n  [attr-flex-order-gt-md=\"2\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n    -ms-flex-order: 2;\n    order: 2; }\n  [attr-flex-order-gt-md=\"3\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n    -ms-flex-order: 3;\n    order: 3; }\n  [attr-flex-order-gt-md=\"4\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n    -ms-flex-order: 4;\n    order: 4; }\n  [attr-flex-order-gt-md=\"5\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n    -ms-flex-order: 5;\n    order: 5; }\n  [attr-flex-order-gt-md=\"6\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n    -ms-flex-order: 6;\n    order: 6; }\n  [attr-flex-order-gt-md=\"7\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n    -ms-flex-order: 7;\n    order: 7; }\n  [attr-flex-order-gt-md=\"8\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n    -ms-flex-order: 8;\n    order: 8; }\n  [attr-flex-order-gt-md=\"9\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n    -ms-flex-order: 9;\n    order: 9; }\n  [attr-flex-order-gt-md=\"10\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n    -ms-flex-order: 10;\n    order: 10; }\n  [attr-flex-order-gt-md=\"11\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n    -ms-flex-order: 11;\n    order: 11; }\n  [attr-flex-order-gt-md=\"12\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n    -ms-flex-order: 12;\n    order: 12; }\n  [attr-flex-order-gt-md=\"13\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n    -ms-flex-order: 13;\n    order: 13; }\n  [attr-flex-order-gt-md=\"14\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 15;\n    -webkit-order: 14;\n    -ms-flex-order: 14;\n    order: 14; }\n  [attr-flex-order-gt-md=\"15\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 16;\n    -webkit-order: 15;\n    -ms-flex-order: 15;\n    order: 15; }\n  [attr-flex-order-gt-md=\"16\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 17;\n    -webkit-order: 16;\n    -ms-flex-order: 16;\n    order: 16; }\n  [attr-flex-order-gt-md=\"17\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 18;\n    -webkit-order: 17;\n    -ms-flex-order: 17;\n    order: 17; }\n  [attr-flex-order-gt-md=\"18\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 19;\n    -webkit-order: 18;\n    -ms-flex-order: 18;\n    order: 18; }\n  [attr-flex-order-gt-md=\"19\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 20;\n    -webkit-order: 19;\n    -ms-flex-order: 19;\n    order: 19; }\n  [attr-flex-order-gt-md=\"20\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 21;\n    -webkit-order: 20;\n    -ms-flex-order: 20;\n    order: 20; }\n  [attr-flex-offset-gt-md=\"0\"][data-yoo-form-input] {\n    margin-left: 0%; }\n  [attr-flex-offset-gt-md=\"5\"][data-yoo-form-input] {\n    margin-left: 5%; }\n  [attr-flex-offset-gt-md=\"10\"][data-yoo-form-input] {\n    margin-left: 10%; }\n  [attr-flex-offset-gt-md=\"15\"][data-yoo-form-input] {\n    margin-left: 15%; }\n  [attr-flex-offset-gt-md=\"20\"][data-yoo-form-input] {\n    margin-left: 20%; }\n  [attr-flex-offset-gt-md=\"25\"][data-yoo-form-input] {\n    margin-left: 25%; }\n  [attr-flex-offset-gt-md=\"30\"][data-yoo-form-input] {\n    margin-left: 30%; }\n  [attr-flex-offset-gt-md=\"35\"][data-yoo-form-input] {\n    margin-left: 35%; }\n  [attr-flex-offset-gt-md=\"40\"][data-yoo-form-input] {\n    margin-left: 40%; }\n  [attr-flex-offset-gt-md=\"45\"][data-yoo-form-input] {\n    margin-left: 45%; }\n  [attr-flex-offset-gt-md=\"50\"][data-yoo-form-input] {\n    margin-left: 50%; }\n  [attr-flex-offset-gt-md=\"55\"][data-yoo-form-input] {\n    margin-left: 55%; }\n  [attr-flex-offset-gt-md=\"60\"][data-yoo-form-input] {\n    margin-left: 60%; }\n  [attr-flex-offset-gt-md=\"65\"][data-yoo-form-input] {\n    margin-left: 65%; }\n  [attr-flex-offset-gt-md=\"70\"][data-yoo-form-input] {\n    margin-left: 70%; }\n  [attr-flex-offset-gt-md=\"75\"][data-yoo-form-input] {\n    margin-left: 75%; }\n  [attr-flex-offset-gt-md=\"80\"][data-yoo-form-input] {\n    margin-left: 80%; }\n  [attr-flex-offset-gt-md=\"85\"][data-yoo-form-input] {\n    margin-left: 85%; }\n  [attr-flex-offset-gt-md=\"90\"][data-yoo-form-input] {\n    margin-left: 90%; }\n  [attr-flex-offset-gt-md=\"95\"][data-yoo-form-input] {\n    margin-left: 95%; }\n  [attr-flex-offset-gt-md=\"33\"][data-yoo-form-input] {\n    margin-left: calc(100% / 3); }\n  [attr-flex-offset-gt-md=\"66\"][data-yoo-form-input] {\n    margin-left: calc(200% / 3); }\n  [attr-layout-align-gt-md][data-yoo-form-input], [attr-layout-align-gt-md=\"start stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    -webkit-align-content: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch;\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch; }\n  [attr-layout-align-gt-md=\"start\"][data-yoo-form-input], [attr-layout-align-gt-md=\"start start\"][data-yoo-form-input], [attr-layout-align-gt-md=\"start center\"][data-yoo-form-input], [attr-layout-align-gt-md=\"start end\"][data-yoo-form-input], [attr-layout-align-gt-md=\"start stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: start;\n    -webkit-justify-content: start;\n    -ms-flex-pack: start;\n    justify-content: start; }\n  [attr-layout-align-gt-md=\"center\"][data-yoo-form-input], [attr-layout-align-gt-md=\"center start\"][data-yoo-form-input], [attr-layout-align-gt-md=\"center center\"][data-yoo-form-input], [attr-layout-align-gt-md=\"center end\"][data-yoo-form-input], [attr-layout-align-gt-md=\"center stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center; }\n  [attr-layout-align-gt-md=\"end\"][data-yoo-form-input], [attr-layout-align-gt-md=\"end center\"][data-yoo-form-input], [attr-layout-align-gt-md=\"end start\"][data-yoo-form-input], [attr-layout-align-gt-md=\"end end\"][data-yoo-form-input], [attr-layout-align-gt-md=\"end stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n    -ms-flex-pack: end;\n    justify-content: flex-end; }\n  [attr-layout-align-gt-md=\"space-around\"][data-yoo-form-input], [attr-layout-align-gt-md=\"space-around center\"][data-yoo-form-input], [attr-layout-align-gt-md=\"space-around start\"][data-yoo-form-input], [attr-layout-align-gt-md=\"space-around end\"][data-yoo-form-input], [attr-layout-align-gt-md=\"space-around stretch\"][data-yoo-form-input] {\n    -webkit-justify-content: space-around;\n    -ms-flex-pack: distribute;\n    justify-content: space-around; }\n  [attr-layout-align-gt-md=\"space-between\"][data-yoo-form-input], [attr-layout-align-gt-md=\"space-between center\"][data-yoo-form-input], [attr-layout-align-gt-md=\"space-between start\"][data-yoo-form-input], [attr-layout-align-gt-md=\"space-between end\"][data-yoo-form-input], [attr-layout-align-gt-md=\"space-between stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n  [attr-layout-align-gt-md=\"start start\"][data-yoo-form-input], [attr-layout-align-gt-md=\"center start\"][data-yoo-form-input], [attr-layout-align-gt-md=\"end start\"][data-yoo-form-input], [attr-layout-align-gt-md=\"space-between start\"][data-yoo-form-input], [attr-layout-align-gt-md=\"space-around start\"][data-yoo-form-input] {\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n    -webkit-align-content: flex-start;\n    -ms-flex-line-pack: start;\n    align-content: flex-start; }\n  [attr-layout-align-gt-md=\"start center\"][data-yoo-form-input], [attr-layout-align-gt-md=\"center center\"][data-yoo-form-input], [attr-layout-align-gt-md=\"end center\"][data-yoo-form-input], [attr-layout-align-gt-md=\"space-between center\"][data-yoo-form-input], [attr-layout-align-gt-md=\"space-around center\"][data-yoo-form-input] {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-align-content: center;\n    -ms-flex-line-pack: center;\n    align-content: center;\n    max-width: 100%; }\n  [attr-layout-align-gt-md=\"start center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-gt-md=\"center center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-gt-md=\"end center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-gt-md=\"space-between center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-gt-md=\"space-around center\"][data-yoo-form-input]    > *[data-yoo-form-input] {\n    max-width: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout-align-gt-md=\"start end\"][data-yoo-form-input], [attr-layout-align-gt-md=\"center end\"][data-yoo-form-input], [attr-layout-align-gt-md=\"end end\"][data-yoo-form-input], [attr-layout-align-gt-md=\"space-between end\"][data-yoo-form-input], [attr-layout-align-gt-md=\"space-around end\"][data-yoo-form-input] {\n    -webkit-box-align: end;\n    -webkit-align-items: flex-end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n    -webkit-align-content: flex-end;\n    -ms-flex-line-pack: end;\n    align-content: flex-end; }\n  [attr-layout-align-gt-md=\"start stretch\"][data-yoo-form-input], [attr-layout-align-gt-md=\"center stretch\"][data-yoo-form-input], [attr-layout-align-gt-md=\"end stretch\"][data-yoo-form-input], [attr-layout-align-gt-md=\"space-between stretch\"][data-yoo-form-input], [attr-layout-align-gt-md=\"space-around stretch\"][data-yoo-form-input] {\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    -webkit-align-content: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch; }\n  [attr-flex-gt-md][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; } }\n\n\@media screen\\0  and (min-width: 1280px) {\n  [attr-flex-gt-md][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%; } }\n\n\@media (min-width: 1280px) {\n  [attr-flex-gt-md-grow][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md-initial][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 auto;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md-auto][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md-none][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md-noshrink][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 auto;\n    -ms-flex: 1 0 auto;\n    flex: 1 0 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md-nogrow][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 auto;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 0%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"0\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 0%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"0\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 100%;\n    max-height: 0%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 5%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"5\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 5%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"5\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 100%;\n    max-height: 5%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 10%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"10\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 10%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"10\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 100%;\n    max-height: 10%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 15%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"15\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 15%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"15\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 100%;\n    max-height: 15%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 20%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"20\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 20%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"20\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 100%;\n    max-height: 20%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 25%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"25\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 25%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"25\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 100%;\n    max-height: 25%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 30%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"30\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 30%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"30\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 100%;\n    max-height: 30%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 35%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"35\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 35%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"35\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 100%;\n    max-height: 35%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 40%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"40\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 40%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"40\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 100%;\n    max-height: 40%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 45%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"45\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 45%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"45\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 100%;\n    max-height: 45%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 50%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"50\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 50%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"50\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 100%;\n    max-height: 50%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 55%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"55\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 55%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"55\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 100%;\n    max-height: 55%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 60%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"60\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 60%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"60\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 100%;\n    max-height: 60%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 65%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"65\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 65%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"65\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 100%;\n    max-height: 65%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 70%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"70\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 70%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"70\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 100%;\n    max-height: 70%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 75%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"75\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 75%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"75\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 100%;\n    max-height: 75%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 80%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"80\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 80%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"80\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 100%;\n    max-height: 80%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 85%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"85\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 85%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"85\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 100%;\n    max-height: 85%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 90%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"90\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 90%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"90\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 100%;\n    max-height: 90%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 95%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"95\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 95%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"95\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 100%;\n    max-height: 95%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-md=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"100\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"100\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"33\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"33\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"33\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"33\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 33%;\n    -ms-flex: 1 1 33%;\n    flex: 1 1 33%;\n    max-width: calc(100% / 3);\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"34\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"34\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"34\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"34\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 34%;\n    -ms-flex: 1 1 34%;\n    flex: 1 1 34%;\n    max-width: 34%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"66\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"66\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"66\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"66\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 66%;\n    -ms-flex: 1 1 66%;\n    flex: 1 1 66%;\n    max-width: calc(200% / 3);\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"67\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"67\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"67\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input]    > [attr-flex-gt-md=\"67\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 67%;\n    -ms-flex: 1 1 67%;\n    flex: 1 1 67%;\n    max-width: 67%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"33\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"33\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"33\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"33\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 33%;\n    -ms-flex: 1 1 33%;\n    flex: 1 1 33%;\n    max-width: 100%;\n    max-height: calc(100% / 3);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"34\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"34\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"34\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"34\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 34%;\n    -ms-flex: 1 1 34%;\n    flex: 1 1 34%;\n    max-width: 100%;\n    max-height: 34%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"66\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"66\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"66\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"66\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 66%;\n    -ms-flex: 1 1 66%;\n    flex: 1 1 66%;\n    max-width: 100%;\n    max-height: calc(200% / 3);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"67\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"67\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"67\"][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input]    > [attr-flex-gt-md=\"67\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 67%;\n    -ms-flex: 1 1 67%;\n    flex: 1 1 67%;\n    max-width: 100%;\n    max-height: 67%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout-gt-md][data-yoo-form-input], [attr-layout-gt-md=\"column\"][data-yoo-form-input], [attr-layout-gt-md=\"row\"][data-yoo-form-input] {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex; }\n  [attr-layout-gt-md=\"column\"][data-yoo-form-input] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column; }\n  [attr-layout-gt-md=\"row\"][data-yoo-form-input] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row; } }\n\n\@media (min-width: 1280px) and (max-width: 1919px) {\n  [attr-hide][data-yoo-form-input]:not([attr-show-gt-xs]):not([attr-show-gt-sm]):not([attr-show-gt-md]):not([attr-show-lg]):not([attr-show]), [attr-hide-gt-xs][data-yoo-form-input]:not([attr-show-gt-xs]):not([attr-show-gt-sm]):not([attr-show-gt-md]):not([attr-show-lg]):not([attr-show]), [attr-hide-gt-sm][data-yoo-form-input]:not([attr-show-gt-xs]):not([attr-show-gt-sm]):not([attr-show-gt-md]):not([attr-show-lg]):not([attr-show]), [attr-hide-gt-md][data-yoo-form-input]:not([attr-show-gt-xs]):not([attr-show-gt-sm]):not([attr-show-gt-md]):not([attr-show-lg]):not([attr-show]) {\n    display: none; }\n  [attr-hide-lg][data-yoo-form-input]:not([attr-show-lg]):not([attr-show]) {\n    display: none; }\n  [attr-flex-order-lg=\"-20\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -19;\n    -webkit-order: -20;\n    -ms-flex-order: -20;\n    order: -20; }\n  [attr-flex-order-lg=\"-19\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -18;\n    -webkit-order: -19;\n    -ms-flex-order: -19;\n    order: -19; }\n  [attr-flex-order-lg=\"-18\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -17;\n    -webkit-order: -18;\n    -ms-flex-order: -18;\n    order: -18; }\n  [attr-flex-order-lg=\"-17\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -16;\n    -webkit-order: -17;\n    -ms-flex-order: -17;\n    order: -17; }\n  [attr-flex-order-lg=\"-16\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -15;\n    -webkit-order: -16;\n    -ms-flex-order: -16;\n    order: -16; }\n  [attr-flex-order-lg=\"-15\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -14;\n    -webkit-order: -15;\n    -ms-flex-order: -15;\n    order: -15; }\n  [attr-flex-order-lg=\"-14\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -13;\n    -webkit-order: -14;\n    -ms-flex-order: -14;\n    order: -14; }\n  [attr-flex-order-lg=\"-13\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -12;\n    -webkit-order: -13;\n    -ms-flex-order: -13;\n    order: -13; }\n  [attr-flex-order-lg=\"-12\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -11;\n    -webkit-order: -12;\n    -ms-flex-order: -12;\n    order: -12; }\n  [attr-flex-order-lg=\"-11\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -10;\n    -webkit-order: -11;\n    -ms-flex-order: -11;\n    order: -11; }\n  [attr-flex-order-lg=\"-10\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -9;\n    -webkit-order: -10;\n    -ms-flex-order: -10;\n    order: -10; }\n  [attr-flex-order-lg=\"-9\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -8;\n    -webkit-order: -9;\n    -ms-flex-order: -9;\n    order: -9; }\n  [attr-flex-order-lg=\"-8\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -7;\n    -webkit-order: -8;\n    -ms-flex-order: -8;\n    order: -8; }\n  [attr-flex-order-lg=\"-7\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -6;\n    -webkit-order: -7;\n    -ms-flex-order: -7;\n    order: -7; }\n  [attr-flex-order-lg=\"-6\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -5;\n    -webkit-order: -6;\n    -ms-flex-order: -6;\n    order: -6; }\n  [attr-flex-order-lg=\"-5\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -4;\n    -webkit-order: -5;\n    -ms-flex-order: -5;\n    order: -5; }\n  [attr-flex-order-lg=\"-4\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -3;\n    -webkit-order: -4;\n    -ms-flex-order: -4;\n    order: -4; }\n  [attr-flex-order-lg=\"-3\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -2;\n    -webkit-order: -3;\n    -ms-flex-order: -3;\n    order: -3; }\n  [attr-flex-order-lg=\"-2\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -1;\n    -webkit-order: -2;\n    -ms-flex-order: -2;\n    order: -2; }\n  [attr-flex-order-lg=\"-1\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n    -ms-flex-order: -1;\n    order: -1; }\n  [attr-flex-order-lg=\"0\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n    -ms-flex-order: 0;\n    order: 0; }\n  [attr-flex-order-lg=\"1\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n    -ms-flex-order: 1;\n    order: 1; }\n  [attr-flex-order-lg=\"2\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n    -ms-flex-order: 2;\n    order: 2; }\n  [attr-flex-order-lg=\"3\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n    -ms-flex-order: 3;\n    order: 3; }\n  [attr-flex-order-lg=\"4\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n    -ms-flex-order: 4;\n    order: 4; }\n  [attr-flex-order-lg=\"5\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n    -ms-flex-order: 5;\n    order: 5; }\n  [attr-flex-order-lg=\"6\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n    -ms-flex-order: 6;\n    order: 6; }\n  [attr-flex-order-lg=\"7\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n    -ms-flex-order: 7;\n    order: 7; }\n  [attr-flex-order-lg=\"8\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n    -ms-flex-order: 8;\n    order: 8; }\n  [attr-flex-order-lg=\"9\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n    -ms-flex-order: 9;\n    order: 9; }\n  [attr-flex-order-lg=\"10\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n    -ms-flex-order: 10;\n    order: 10; }\n  [attr-flex-order-lg=\"11\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n    -ms-flex-order: 11;\n    order: 11; }\n  [attr-flex-order-lg=\"12\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n    -ms-flex-order: 12;\n    order: 12; }\n  [attr-flex-order-lg=\"13\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n    -ms-flex-order: 13;\n    order: 13; }\n  [attr-flex-order-lg=\"14\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 15;\n    -webkit-order: 14;\n    -ms-flex-order: 14;\n    order: 14; }\n  [attr-flex-order-lg=\"15\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 16;\n    -webkit-order: 15;\n    -ms-flex-order: 15;\n    order: 15; }\n  [attr-flex-order-lg=\"16\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 17;\n    -webkit-order: 16;\n    -ms-flex-order: 16;\n    order: 16; }\n  [attr-flex-order-lg=\"17\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 18;\n    -webkit-order: 17;\n    -ms-flex-order: 17;\n    order: 17; }\n  [attr-flex-order-lg=\"18\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 19;\n    -webkit-order: 18;\n    -ms-flex-order: 18;\n    order: 18; }\n  [attr-flex-order-lg=\"19\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 20;\n    -webkit-order: 19;\n    -ms-flex-order: 19;\n    order: 19; }\n  [attr-flex-order-lg=\"20\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 21;\n    -webkit-order: 20;\n    -ms-flex-order: 20;\n    order: 20; }\n  [attr-flex-offset-lg=\"0\"][data-yoo-form-input] {\n    margin-left: 0%; }\n  [attr-flex-offset-lg=\"5\"][data-yoo-form-input] {\n    margin-left: 5%; }\n  [attr-flex-offset-lg=\"10\"][data-yoo-form-input] {\n    margin-left: 10%; }\n  [attr-flex-offset-lg=\"15\"][data-yoo-form-input] {\n    margin-left: 15%; }\n  [attr-flex-offset-lg=\"20\"][data-yoo-form-input] {\n    margin-left: 20%; }\n  [attr-flex-offset-lg=\"25\"][data-yoo-form-input] {\n    margin-left: 25%; }\n  [attr-flex-offset-lg=\"30\"][data-yoo-form-input] {\n    margin-left: 30%; }\n  [attr-flex-offset-lg=\"35\"][data-yoo-form-input] {\n    margin-left: 35%; }\n  [attr-flex-offset-lg=\"40\"][data-yoo-form-input] {\n    margin-left: 40%; }\n  [attr-flex-offset-lg=\"45\"][data-yoo-form-input] {\n    margin-left: 45%; }\n  [attr-flex-offset-lg=\"50\"][data-yoo-form-input] {\n    margin-left: 50%; }\n  [attr-flex-offset-lg=\"55\"][data-yoo-form-input] {\n    margin-left: 55%; }\n  [attr-flex-offset-lg=\"60\"][data-yoo-form-input] {\n    margin-left: 60%; }\n  [attr-flex-offset-lg=\"65\"][data-yoo-form-input] {\n    margin-left: 65%; }\n  [attr-flex-offset-lg=\"70\"][data-yoo-form-input] {\n    margin-left: 70%; }\n  [attr-flex-offset-lg=\"75\"][data-yoo-form-input] {\n    margin-left: 75%; }\n  [attr-flex-offset-lg=\"80\"][data-yoo-form-input] {\n    margin-left: 80%; }\n  [attr-flex-offset-lg=\"85\"][data-yoo-form-input] {\n    margin-left: 85%; }\n  [attr-flex-offset-lg=\"90\"][data-yoo-form-input] {\n    margin-left: 90%; }\n  [attr-flex-offset-lg=\"95\"][data-yoo-form-input] {\n    margin-left: 95%; }\n  [attr-flex-offset-lg=\"33\"][data-yoo-form-input] {\n    margin-left: calc(100% / 3); }\n  [attr-flex-offset-lg=\"66\"][data-yoo-form-input] {\n    margin-left: calc(200% / 3); }\n  [attr-layout-align-lg][data-yoo-form-input], [attr-layout-align-lg=\"start stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    -webkit-align-content: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch;\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch; }\n  [attr-layout-align-lg=\"start\"][data-yoo-form-input], [attr-layout-align-lg=\"start start\"][data-yoo-form-input], [attr-layout-align-lg=\"start center\"][data-yoo-form-input], [attr-layout-align-lg=\"start end\"][data-yoo-form-input], [attr-layout-align-lg=\"start stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: start;\n    -webkit-justify-content: start;\n    -ms-flex-pack: start;\n    justify-content: start; }\n  [attr-layout-align-lg=\"center\"][data-yoo-form-input], [attr-layout-align-lg=\"center start\"][data-yoo-form-input], [attr-layout-align-lg=\"center center\"][data-yoo-form-input], [attr-layout-align-lg=\"center end\"][data-yoo-form-input], [attr-layout-align-lg=\"center stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center; }\n  [attr-layout-align-lg=\"end\"][data-yoo-form-input], [attr-layout-align-lg=\"end center\"][data-yoo-form-input], [attr-layout-align-lg=\"end start\"][data-yoo-form-input], [attr-layout-align-lg=\"end end\"][data-yoo-form-input], [attr-layout-align-lg=\"end stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n    -ms-flex-pack: end;\n    justify-content: flex-end; }\n  [attr-layout-align-lg=\"space-around\"][data-yoo-form-input], [attr-layout-align-lg=\"space-around center\"][data-yoo-form-input], [attr-layout-align-lg=\"space-around start\"][data-yoo-form-input], [attr-layout-align-lg=\"space-around end\"][data-yoo-form-input], [attr-layout-align-lg=\"space-around stretch\"][data-yoo-form-input] {\n    -webkit-justify-content: space-around;\n    -ms-flex-pack: distribute;\n    justify-content: space-around; }\n  [attr-layout-align-lg=\"space-between\"][data-yoo-form-input], [attr-layout-align-lg=\"space-between center\"][data-yoo-form-input], [attr-layout-align-lg=\"space-between start\"][data-yoo-form-input], [attr-layout-align-lg=\"space-between end\"][data-yoo-form-input], [attr-layout-align-lg=\"space-between stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n  [attr-layout-align-lg=\"start start\"][data-yoo-form-input], [attr-layout-align-lg=\"center start\"][data-yoo-form-input], [attr-layout-align-lg=\"end start\"][data-yoo-form-input], [attr-layout-align-lg=\"space-between start\"][data-yoo-form-input], [attr-layout-align-lg=\"space-around start\"][data-yoo-form-input] {\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n    -webkit-align-content: flex-start;\n    -ms-flex-line-pack: start;\n    align-content: flex-start; }\n  [attr-layout-align-lg=\"start center\"][data-yoo-form-input], [attr-layout-align-lg=\"center center\"][data-yoo-form-input], [attr-layout-align-lg=\"end center\"][data-yoo-form-input], [attr-layout-align-lg=\"space-between center\"][data-yoo-form-input], [attr-layout-align-lg=\"space-around center\"][data-yoo-form-input] {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-align-content: center;\n    -ms-flex-line-pack: center;\n    align-content: center;\n    max-width: 100%; }\n  [attr-layout-align-lg=\"start center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-lg=\"center center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-lg=\"end center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-lg=\"space-between center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-lg=\"space-around center\"][data-yoo-form-input]    > *[data-yoo-form-input] {\n    max-width: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout-align-lg=\"start end\"][data-yoo-form-input], [attr-layout-align-lg=\"center end\"][data-yoo-form-input], [attr-layout-align-lg=\"end end\"][data-yoo-form-input], [attr-layout-align-lg=\"space-between end\"][data-yoo-form-input], [attr-layout-align-lg=\"space-around end\"][data-yoo-form-input] {\n    -webkit-box-align: end;\n    -webkit-align-items: flex-end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n    -webkit-align-content: flex-end;\n    -ms-flex-line-pack: end;\n    align-content: flex-end; }\n  [attr-layout-align-lg=\"start stretch\"][data-yoo-form-input], [attr-layout-align-lg=\"center stretch\"][data-yoo-form-input], [attr-layout-align-lg=\"end stretch\"][data-yoo-form-input], [attr-layout-align-lg=\"space-between stretch\"][data-yoo-form-input], [attr-layout-align-lg=\"space-around stretch\"][data-yoo-form-input] {\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    -webkit-align-content: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch; }\n  [attr-flex-lg][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; } }\n\n\@media screen\\0  and (min-width: 1280px) and (max-width: 1919px) {\n  [attr-flex-lg][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%; } }\n\n\@media (min-width: 1280px) and (max-width: 1919px) {\n  [attr-flex-lg-grow][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg-initial][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 auto;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg-auto][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg-none][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg-noshrink][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 auto;\n    -ms-flex: 1 0 auto;\n    flex: 1 0 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg-nogrow][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 auto;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 0%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"0\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 0%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"0\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 100%;\n    max-height: 0%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 5%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"5\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 5%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"5\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 100%;\n    max-height: 5%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 10%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"10\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 10%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"10\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 100%;\n    max-height: 10%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 15%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"15\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 15%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"15\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 100%;\n    max-height: 15%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 20%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"20\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 20%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"20\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 100%;\n    max-height: 20%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 25%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"25\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 25%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"25\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 100%;\n    max-height: 25%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 30%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"30\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 30%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"30\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 100%;\n    max-height: 30%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 35%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"35\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 35%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"35\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 100%;\n    max-height: 35%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 40%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"40\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 40%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"40\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 100%;\n    max-height: 40%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 45%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"45\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 45%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"45\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 100%;\n    max-height: 45%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 50%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"50\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 50%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"50\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 100%;\n    max-height: 50%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 55%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"55\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 55%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"55\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 100%;\n    max-height: 55%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 60%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"60\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 60%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"60\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 100%;\n    max-height: 60%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 65%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"65\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 65%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"65\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 100%;\n    max-height: 65%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 70%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"70\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 70%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"70\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 100%;\n    max-height: 70%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 75%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"75\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 75%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"75\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 100%;\n    max-height: 75%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 80%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"80\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 80%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"80\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 100%;\n    max-height: 80%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 85%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"85\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 85%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"85\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 100%;\n    max-height: 85%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 90%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"90\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 90%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"90\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 100%;\n    max-height: 90%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 95%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"95\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 95%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"95\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 100%;\n    max-height: 95%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-lg=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"100\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"100\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"33\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"33\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"33\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"33\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 33%;\n    -ms-flex: 1 1 33%;\n    flex: 1 1 33%;\n    max-width: calc(100% / 3);\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"34\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"34\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"34\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"34\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 34%;\n    -ms-flex: 1 1 34%;\n    flex: 1 1 34%;\n    max-width: 34%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"66\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"66\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"66\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"66\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 66%;\n    -ms-flex: 1 1 66%;\n    flex: 1 1 66%;\n    max-width: calc(200% / 3);\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"67\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"67\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"67\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input]    > [attr-flex-lg=\"67\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 67%;\n    -ms-flex: 1 1 67%;\n    flex: 1 1 67%;\n    max-width: 67%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"33\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"33\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"33\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"33\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 33%;\n    -ms-flex: 1 1 33%;\n    flex: 1 1 33%;\n    max-width: 100%;\n    max-height: calc(100% / 3);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"34\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"34\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"34\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"34\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 34%;\n    -ms-flex: 1 1 34%;\n    flex: 1 1 34%;\n    max-width: 100%;\n    max-height: 34%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"66\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"66\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"66\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"66\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 66%;\n    -ms-flex: 1 1 66%;\n    flex: 1 1 66%;\n    max-width: 100%;\n    max-height: calc(200% / 3);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"67\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"67\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"67\"][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input]    > [attr-flex-lg=\"67\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 67%;\n    -ms-flex: 1 1 67%;\n    flex: 1 1 67%;\n    max-width: 100%;\n    max-height: 67%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout-lg][data-yoo-form-input], [attr-layout-lg=\"column\"][data-yoo-form-input], [attr-layout-lg=\"row\"][data-yoo-form-input] {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex; }\n  [attr-layout-lg=\"column\"][data-yoo-form-input] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column; }\n  [attr-layout-lg=\"row\"][data-yoo-form-input] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row; } }\n\n\@media (min-width: 1920px) {\n  [attr-flex-order-gt-lg=\"-20\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -19;\n    -webkit-order: -20;\n    -ms-flex-order: -20;\n    order: -20; }\n  [attr-flex-order-gt-lg=\"-19\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -18;\n    -webkit-order: -19;\n    -ms-flex-order: -19;\n    order: -19; }\n  [attr-flex-order-gt-lg=\"-18\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -17;\n    -webkit-order: -18;\n    -ms-flex-order: -18;\n    order: -18; }\n  [attr-flex-order-gt-lg=\"-17\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -16;\n    -webkit-order: -17;\n    -ms-flex-order: -17;\n    order: -17; }\n  [attr-flex-order-gt-lg=\"-16\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -15;\n    -webkit-order: -16;\n    -ms-flex-order: -16;\n    order: -16; }\n  [attr-flex-order-gt-lg=\"-15\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -14;\n    -webkit-order: -15;\n    -ms-flex-order: -15;\n    order: -15; }\n  [attr-flex-order-gt-lg=\"-14\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -13;\n    -webkit-order: -14;\n    -ms-flex-order: -14;\n    order: -14; }\n  [attr-flex-order-gt-lg=\"-13\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -12;\n    -webkit-order: -13;\n    -ms-flex-order: -13;\n    order: -13; }\n  [attr-flex-order-gt-lg=\"-12\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -11;\n    -webkit-order: -12;\n    -ms-flex-order: -12;\n    order: -12; }\n  [attr-flex-order-gt-lg=\"-11\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -10;\n    -webkit-order: -11;\n    -ms-flex-order: -11;\n    order: -11; }\n  [attr-flex-order-gt-lg=\"-10\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -9;\n    -webkit-order: -10;\n    -ms-flex-order: -10;\n    order: -10; }\n  [attr-flex-order-gt-lg=\"-9\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -8;\n    -webkit-order: -9;\n    -ms-flex-order: -9;\n    order: -9; }\n  [attr-flex-order-gt-lg=\"-8\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -7;\n    -webkit-order: -8;\n    -ms-flex-order: -8;\n    order: -8; }\n  [attr-flex-order-gt-lg=\"-7\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -6;\n    -webkit-order: -7;\n    -ms-flex-order: -7;\n    order: -7; }\n  [attr-flex-order-gt-lg=\"-6\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -5;\n    -webkit-order: -6;\n    -ms-flex-order: -6;\n    order: -6; }\n  [attr-flex-order-gt-lg=\"-5\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -4;\n    -webkit-order: -5;\n    -ms-flex-order: -5;\n    order: -5; }\n  [attr-flex-order-gt-lg=\"-4\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -3;\n    -webkit-order: -4;\n    -ms-flex-order: -4;\n    order: -4; }\n  [attr-flex-order-gt-lg=\"-3\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -2;\n    -webkit-order: -3;\n    -ms-flex-order: -3;\n    order: -3; }\n  [attr-flex-order-gt-lg=\"-2\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -1;\n    -webkit-order: -2;\n    -ms-flex-order: -2;\n    order: -2; }\n  [attr-flex-order-gt-lg=\"-1\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n    -ms-flex-order: -1;\n    order: -1; }\n  [attr-flex-order-gt-lg=\"0\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n    -ms-flex-order: 0;\n    order: 0; }\n  [attr-flex-order-gt-lg=\"1\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n    -ms-flex-order: 1;\n    order: 1; }\n  [attr-flex-order-gt-lg=\"2\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n    -ms-flex-order: 2;\n    order: 2; }\n  [attr-flex-order-gt-lg=\"3\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n    -ms-flex-order: 3;\n    order: 3; }\n  [attr-flex-order-gt-lg=\"4\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n    -ms-flex-order: 4;\n    order: 4; }\n  [attr-flex-order-gt-lg=\"5\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n    -ms-flex-order: 5;\n    order: 5; }\n  [attr-flex-order-gt-lg=\"6\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n    -ms-flex-order: 6;\n    order: 6; }\n  [attr-flex-order-gt-lg=\"7\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n    -ms-flex-order: 7;\n    order: 7; }\n  [attr-flex-order-gt-lg=\"8\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n    -ms-flex-order: 8;\n    order: 8; }\n  [attr-flex-order-gt-lg=\"9\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n    -ms-flex-order: 9;\n    order: 9; }\n  [attr-flex-order-gt-lg=\"10\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n    -ms-flex-order: 10;\n    order: 10; }\n  [attr-flex-order-gt-lg=\"11\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n    -ms-flex-order: 11;\n    order: 11; }\n  [attr-flex-order-gt-lg=\"12\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n    -ms-flex-order: 12;\n    order: 12; }\n  [attr-flex-order-gt-lg=\"13\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n    -ms-flex-order: 13;\n    order: 13; }\n  [attr-flex-order-gt-lg=\"14\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 15;\n    -webkit-order: 14;\n    -ms-flex-order: 14;\n    order: 14; }\n  [attr-flex-order-gt-lg=\"15\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 16;\n    -webkit-order: 15;\n    -ms-flex-order: 15;\n    order: 15; }\n  [attr-flex-order-gt-lg=\"16\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 17;\n    -webkit-order: 16;\n    -ms-flex-order: 16;\n    order: 16; }\n  [attr-flex-order-gt-lg=\"17\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 18;\n    -webkit-order: 17;\n    -ms-flex-order: 17;\n    order: 17; }\n  [attr-flex-order-gt-lg=\"18\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 19;\n    -webkit-order: 18;\n    -ms-flex-order: 18;\n    order: 18; }\n  [attr-flex-order-gt-lg=\"19\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 20;\n    -webkit-order: 19;\n    -ms-flex-order: 19;\n    order: 19; }\n  [attr-flex-order-gt-lg=\"20\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 21;\n    -webkit-order: 20;\n    -ms-flex-order: 20;\n    order: 20; }\n  [attr-flex-offset-gt-lg=\"0\"][data-yoo-form-input] {\n    margin-left: 0%; }\n  [attr-flex-offset-gt-lg=\"5\"][data-yoo-form-input] {\n    margin-left: 5%; }\n  [attr-flex-offset-gt-lg=\"10\"][data-yoo-form-input] {\n    margin-left: 10%; }\n  [attr-flex-offset-gt-lg=\"15\"][data-yoo-form-input] {\n    margin-left: 15%; }\n  [attr-flex-offset-gt-lg=\"20\"][data-yoo-form-input] {\n    margin-left: 20%; }\n  [attr-flex-offset-gt-lg=\"25\"][data-yoo-form-input] {\n    margin-left: 25%; }\n  [attr-flex-offset-gt-lg=\"30\"][data-yoo-form-input] {\n    margin-left: 30%; }\n  [attr-flex-offset-gt-lg=\"35\"][data-yoo-form-input] {\n    margin-left: 35%; }\n  [attr-flex-offset-gt-lg=\"40\"][data-yoo-form-input] {\n    margin-left: 40%; }\n  [attr-flex-offset-gt-lg=\"45\"][data-yoo-form-input] {\n    margin-left: 45%; }\n  [attr-flex-offset-gt-lg=\"50\"][data-yoo-form-input] {\n    margin-left: 50%; }\n  [attr-flex-offset-gt-lg=\"55\"][data-yoo-form-input] {\n    margin-left: 55%; }\n  [attr-flex-offset-gt-lg=\"60\"][data-yoo-form-input] {\n    margin-left: 60%; }\n  [attr-flex-offset-gt-lg=\"65\"][data-yoo-form-input] {\n    margin-left: 65%; }\n  [attr-flex-offset-gt-lg=\"70\"][data-yoo-form-input] {\n    margin-left: 70%; }\n  [attr-flex-offset-gt-lg=\"75\"][data-yoo-form-input] {\n    margin-left: 75%; }\n  [attr-flex-offset-gt-lg=\"80\"][data-yoo-form-input] {\n    margin-left: 80%; }\n  [attr-flex-offset-gt-lg=\"85\"][data-yoo-form-input] {\n    margin-left: 85%; }\n  [attr-flex-offset-gt-lg=\"90\"][data-yoo-form-input] {\n    margin-left: 90%; }\n  [attr-flex-offset-gt-lg=\"95\"][data-yoo-form-input] {\n    margin-left: 95%; }\n  [attr-flex-offset-gt-lg=\"33\"][data-yoo-form-input] {\n    margin-left: calc(100% / 3); }\n  [attr-flex-offset-gt-lg=\"66\"][data-yoo-form-input] {\n    margin-left: calc(200% / 3); }\n  [attr-layout-align-gt-lg][data-yoo-form-input], [attr-layout-align-gt-lg=\"start stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    -webkit-align-content: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch;\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch; }\n  [attr-layout-align-gt-lg=\"start\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"start start\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"start center\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"start end\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"start stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: start;\n    -webkit-justify-content: start;\n    -ms-flex-pack: start;\n    justify-content: start; }\n  [attr-layout-align-gt-lg=\"center\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"center start\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"center center\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"center end\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"center stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center; }\n  [attr-layout-align-gt-lg=\"end\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"end center\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"end start\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"end end\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"end stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n    -ms-flex-pack: end;\n    justify-content: flex-end; }\n  [attr-layout-align-gt-lg=\"space-around\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"space-around center\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"space-around start\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"space-around end\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"space-around stretch\"][data-yoo-form-input] {\n    -webkit-justify-content: space-around;\n    -ms-flex-pack: distribute;\n    justify-content: space-around; }\n  [attr-layout-align-gt-lg=\"space-between\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"space-between center\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"space-between start\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"space-between end\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"space-between stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n  [attr-layout-align-gt-lg=\"start start\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"center start\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"end start\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"space-between start\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"space-around start\"][data-yoo-form-input] {\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n    -webkit-align-content: flex-start;\n    -ms-flex-line-pack: start;\n    align-content: flex-start; }\n  [attr-layout-align-gt-lg=\"start center\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"center center\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"end center\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"space-between center\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"space-around center\"][data-yoo-form-input] {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-align-content: center;\n    -ms-flex-line-pack: center;\n    align-content: center;\n    max-width: 100%; }\n  [attr-layout-align-gt-lg=\"start center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-gt-lg=\"center center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-gt-lg=\"end center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-gt-lg=\"space-between center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-gt-lg=\"space-around center\"][data-yoo-form-input]    > *[data-yoo-form-input] {\n    max-width: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout-align-gt-lg=\"start end\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"center end\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"end end\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"space-between end\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"space-around end\"][data-yoo-form-input] {\n    -webkit-box-align: end;\n    -webkit-align-items: flex-end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n    -webkit-align-content: flex-end;\n    -ms-flex-line-pack: end;\n    align-content: flex-end; }\n  [attr-layout-align-gt-lg=\"start stretch\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"center stretch\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"end stretch\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"space-between stretch\"][data-yoo-form-input], [attr-layout-align-gt-lg=\"space-around stretch\"][data-yoo-form-input] {\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    -webkit-align-content: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch; }\n  [attr-flex-gt-lg][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; } }\n\n\@media screen\\0  and (min-width: 1920px) {\n  [attr-flex-gt-lg][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%; } }\n\n\@media (min-width: 1920px) {\n  [attr-flex-gt-lg-grow][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg-initial][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 auto;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg-auto][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg-none][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg-noshrink][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 auto;\n    -ms-flex: 1 0 auto;\n    flex: 1 0 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg-nogrow][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 auto;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 0%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"0\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 0%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"0\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 100%;\n    max-height: 0%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 5%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"5\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 5%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"5\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 100%;\n    max-height: 5%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 10%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"10\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 10%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"10\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 100%;\n    max-height: 10%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 15%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"15\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 15%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"15\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 100%;\n    max-height: 15%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 20%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"20\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 20%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"20\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 100%;\n    max-height: 20%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 25%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"25\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 25%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"25\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 100%;\n    max-height: 25%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 30%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"30\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 30%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"30\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 100%;\n    max-height: 30%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 35%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"35\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 35%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"35\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 100%;\n    max-height: 35%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 40%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"40\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 40%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"40\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 100%;\n    max-height: 40%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 45%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"45\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 45%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"45\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 100%;\n    max-height: 45%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 50%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"50\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 50%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"50\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 100%;\n    max-height: 50%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 55%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"55\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 55%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"55\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 100%;\n    max-height: 55%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 60%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"60\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 60%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"60\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 100%;\n    max-height: 60%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 65%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"65\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 65%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"65\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 100%;\n    max-height: 65%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 70%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"70\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 70%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"70\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 100%;\n    max-height: 70%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 75%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"75\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 75%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"75\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 100%;\n    max-height: 75%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 80%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"80\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 80%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"80\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 100%;\n    max-height: 80%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 85%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"85\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 85%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"85\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 100%;\n    max-height: 85%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 90%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"90\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 90%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"90\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 100%;\n    max-height: 90%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 95%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"95\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 95%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"95\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 100%;\n    max-height: 95%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-gt-lg=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"100\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"100\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"33\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"33\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"33\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"33\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 33%;\n    -ms-flex: 1 1 33%;\n    flex: 1 1 33%;\n    max-width: calc(100% / 3);\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"34\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"34\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"34\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"34\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 34%;\n    -ms-flex: 1 1 34%;\n    flex: 1 1 34%;\n    max-width: 34%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"66\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"66\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"66\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"66\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 66%;\n    -ms-flex: 1 1 66%;\n    flex: 1 1 66%;\n    max-width: calc(200% / 3);\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"67\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"67\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"67\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"67\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 67%;\n    -ms-flex: 1 1 67%;\n    flex: 1 1 67%;\n    max-width: 67%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"33\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"33\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"33\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"33\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 33%;\n    -ms-flex: 1 1 33%;\n    flex: 1 1 33%;\n    max-width: 100%;\n    max-height: calc(100% / 3);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"34\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"34\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"34\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"34\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 34%;\n    -ms-flex: 1 1 34%;\n    flex: 1 1 34%;\n    max-width: 100%;\n    max-height: 34%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"66\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"66\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"66\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"66\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 66%;\n    -ms-flex: 1 1 66%;\n    flex: 1 1 66%;\n    max-width: 100%;\n    max-height: calc(200% / 3);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"67\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"67\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"67\"][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input]    > [attr-flex-gt-lg=\"67\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 67%;\n    -ms-flex: 1 1 67%;\n    flex: 1 1 67%;\n    max-width: 100%;\n    max-height: 67%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout-gt-lg][data-yoo-form-input], [attr-layout-gt-lg=\"column\"][data-yoo-form-input], [attr-layout-gt-lg=\"row\"][data-yoo-form-input] {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex; }\n  [attr-layout-gt-lg=\"column\"][data-yoo-form-input] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column; }\n  [attr-layout-gt-lg=\"row\"][data-yoo-form-input] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row; }\n  [attr-flex-order-xl=\"-20\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -19;\n    -webkit-order: -20;\n    -ms-flex-order: -20;\n    order: -20; }\n  [attr-flex-order-xl=\"-19\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -18;\n    -webkit-order: -19;\n    -ms-flex-order: -19;\n    order: -19; }\n  [attr-flex-order-xl=\"-18\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -17;\n    -webkit-order: -18;\n    -ms-flex-order: -18;\n    order: -18; }\n  [attr-flex-order-xl=\"-17\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -16;\n    -webkit-order: -17;\n    -ms-flex-order: -17;\n    order: -17; }\n  [attr-flex-order-xl=\"-16\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -15;\n    -webkit-order: -16;\n    -ms-flex-order: -16;\n    order: -16; }\n  [attr-flex-order-xl=\"-15\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -14;\n    -webkit-order: -15;\n    -ms-flex-order: -15;\n    order: -15; }\n  [attr-flex-order-xl=\"-14\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -13;\n    -webkit-order: -14;\n    -ms-flex-order: -14;\n    order: -14; }\n  [attr-flex-order-xl=\"-13\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -12;\n    -webkit-order: -13;\n    -ms-flex-order: -13;\n    order: -13; }\n  [attr-flex-order-xl=\"-12\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -11;\n    -webkit-order: -12;\n    -ms-flex-order: -12;\n    order: -12; }\n  [attr-flex-order-xl=\"-11\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -10;\n    -webkit-order: -11;\n    -ms-flex-order: -11;\n    order: -11; }\n  [attr-flex-order-xl=\"-10\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -9;\n    -webkit-order: -10;\n    -ms-flex-order: -10;\n    order: -10; }\n  [attr-flex-order-xl=\"-9\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -8;\n    -webkit-order: -9;\n    -ms-flex-order: -9;\n    order: -9; }\n  [attr-flex-order-xl=\"-8\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -7;\n    -webkit-order: -8;\n    -ms-flex-order: -8;\n    order: -8; }\n  [attr-flex-order-xl=\"-7\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -6;\n    -webkit-order: -7;\n    -ms-flex-order: -7;\n    order: -7; }\n  [attr-flex-order-xl=\"-6\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -5;\n    -webkit-order: -6;\n    -ms-flex-order: -6;\n    order: -6; }\n  [attr-flex-order-xl=\"-5\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -4;\n    -webkit-order: -5;\n    -ms-flex-order: -5;\n    order: -5; }\n  [attr-flex-order-xl=\"-4\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -3;\n    -webkit-order: -4;\n    -ms-flex-order: -4;\n    order: -4; }\n  [attr-flex-order-xl=\"-3\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -2;\n    -webkit-order: -3;\n    -ms-flex-order: -3;\n    order: -3; }\n  [attr-flex-order-xl=\"-2\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: -1;\n    -webkit-order: -2;\n    -ms-flex-order: -2;\n    order: -2; }\n  [attr-flex-order-xl=\"-1\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n    -ms-flex-order: -1;\n    order: -1; }\n  [attr-flex-order-xl=\"0\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n    -ms-flex-order: 0;\n    order: 0; }\n  [attr-flex-order-xl=\"1\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n    -ms-flex-order: 1;\n    order: 1; }\n  [attr-flex-order-xl=\"2\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n    -ms-flex-order: 2;\n    order: 2; }\n  [attr-flex-order-xl=\"3\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n    -ms-flex-order: 3;\n    order: 3; }\n  [attr-flex-order-xl=\"4\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n    -ms-flex-order: 4;\n    order: 4; }\n  [attr-flex-order-xl=\"5\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n    -ms-flex-order: 5;\n    order: 5; }\n  [attr-flex-order-xl=\"6\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n    -ms-flex-order: 6;\n    order: 6; }\n  [attr-flex-order-xl=\"7\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n    -ms-flex-order: 7;\n    order: 7; }\n  [attr-flex-order-xl=\"8\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n    -ms-flex-order: 8;\n    order: 8; }\n  [attr-flex-order-xl=\"9\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n    -ms-flex-order: 9;\n    order: 9; }\n  [attr-flex-order-xl=\"10\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n    -ms-flex-order: 10;\n    order: 10; }\n  [attr-flex-order-xl=\"11\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n    -ms-flex-order: 11;\n    order: 11; }\n  [attr-flex-order-xl=\"12\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n    -ms-flex-order: 12;\n    order: 12; }\n  [attr-flex-order-xl=\"13\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n    -ms-flex-order: 13;\n    order: 13; }\n  [attr-flex-order-xl=\"14\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 15;\n    -webkit-order: 14;\n    -ms-flex-order: 14;\n    order: 14; }\n  [attr-flex-order-xl=\"15\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 16;\n    -webkit-order: 15;\n    -ms-flex-order: 15;\n    order: 15; }\n  [attr-flex-order-xl=\"16\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 17;\n    -webkit-order: 16;\n    -ms-flex-order: 16;\n    order: 16; }\n  [attr-flex-order-xl=\"17\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 18;\n    -webkit-order: 17;\n    -ms-flex-order: 17;\n    order: 17; }\n  [attr-flex-order-xl=\"18\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 19;\n    -webkit-order: 18;\n    -ms-flex-order: 18;\n    order: 18; }\n  [attr-flex-order-xl=\"19\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 20;\n    -webkit-order: 19;\n    -ms-flex-order: 19;\n    order: 19; }\n  [attr-flex-order-xl=\"20\"][data-yoo-form-input] {\n    -webkit-box-ordinal-group: 21;\n    -webkit-order: 20;\n    -ms-flex-order: 20;\n    order: 20; }\n  [attr-flex-offset-xl=\"0\"][data-yoo-form-input] {\n    margin-left: 0%; }\n  [attr-flex-offset-xl=\"5\"][data-yoo-form-input] {\n    margin-left: 5%; }\n  [attr-flex-offset-xl=\"10\"][data-yoo-form-input] {\n    margin-left: 10%; }\n  [attr-flex-offset-xl=\"15\"][data-yoo-form-input] {\n    margin-left: 15%; }\n  [attr-flex-offset-xl=\"20\"][data-yoo-form-input] {\n    margin-left: 20%; }\n  [attr-flex-offset-xl=\"25\"][data-yoo-form-input] {\n    margin-left: 25%; }\n  [attr-flex-offset-xl=\"30\"][data-yoo-form-input] {\n    margin-left: 30%; }\n  [attr-flex-offset-xl=\"35\"][data-yoo-form-input] {\n    margin-left: 35%; }\n  [attr-flex-offset-xl=\"40\"][data-yoo-form-input] {\n    margin-left: 40%; }\n  [attr-flex-offset-xl=\"45\"][data-yoo-form-input] {\n    margin-left: 45%; }\n  [attr-flex-offset-xl=\"50\"][data-yoo-form-input] {\n    margin-left: 50%; }\n  [attr-flex-offset-xl=\"55\"][data-yoo-form-input] {\n    margin-left: 55%; }\n  [attr-flex-offset-xl=\"60\"][data-yoo-form-input] {\n    margin-left: 60%; }\n  [attr-flex-offset-xl=\"65\"][data-yoo-form-input] {\n    margin-left: 65%; }\n  [attr-flex-offset-xl=\"70\"][data-yoo-form-input] {\n    margin-left: 70%; }\n  [attr-flex-offset-xl=\"75\"][data-yoo-form-input] {\n    margin-left: 75%; }\n  [attr-flex-offset-xl=\"80\"][data-yoo-form-input] {\n    margin-left: 80%; }\n  [attr-flex-offset-xl=\"85\"][data-yoo-form-input] {\n    margin-left: 85%; }\n  [attr-flex-offset-xl=\"90\"][data-yoo-form-input] {\n    margin-left: 90%; }\n  [attr-flex-offset-xl=\"95\"][data-yoo-form-input] {\n    margin-left: 95%; }\n  [attr-flex-offset-xl=\"33\"][data-yoo-form-input] {\n    margin-left: calc(100% / 3); }\n  [attr-flex-offset-xl=\"66\"][data-yoo-form-input] {\n    margin-left: calc(200% / 3); }\n  [attr-layout-align-xl][data-yoo-form-input], [attr-layout-align-xl=\"start stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    -webkit-align-content: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch;\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch; }\n  [attr-layout-align-xl=\"start\"][data-yoo-form-input], [attr-layout-align-xl=\"start start\"][data-yoo-form-input], [attr-layout-align-xl=\"start center\"][data-yoo-form-input], [attr-layout-align-xl=\"start end\"][data-yoo-form-input], [attr-layout-align-xl=\"start stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: start;\n    -webkit-justify-content: start;\n    -ms-flex-pack: start;\n    justify-content: start; }\n  [attr-layout-align-xl=\"center\"][data-yoo-form-input], [attr-layout-align-xl=\"center start\"][data-yoo-form-input], [attr-layout-align-xl=\"center center\"][data-yoo-form-input], [attr-layout-align-xl=\"center end\"][data-yoo-form-input], [attr-layout-align-xl=\"center stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center; }\n  [attr-layout-align-xl=\"end\"][data-yoo-form-input], [attr-layout-align-xl=\"end center\"][data-yoo-form-input], [attr-layout-align-xl=\"end start\"][data-yoo-form-input], [attr-layout-align-xl=\"end end\"][data-yoo-form-input], [attr-layout-align-xl=\"end stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n    -ms-flex-pack: end;\n    justify-content: flex-end; }\n  [attr-layout-align-xl=\"space-around\"][data-yoo-form-input], [attr-layout-align-xl=\"space-around center\"][data-yoo-form-input], [attr-layout-align-xl=\"space-around start\"][data-yoo-form-input], [attr-layout-align-xl=\"space-around end\"][data-yoo-form-input], [attr-layout-align-xl=\"space-around stretch\"][data-yoo-form-input] {\n    -webkit-justify-content: space-around;\n    -ms-flex-pack: distribute;\n    justify-content: space-around; }\n  [attr-layout-align-xl=\"space-between\"][data-yoo-form-input], [attr-layout-align-xl=\"space-between center\"][data-yoo-form-input], [attr-layout-align-xl=\"space-between start\"][data-yoo-form-input], [attr-layout-align-xl=\"space-between end\"][data-yoo-form-input], [attr-layout-align-xl=\"space-between stretch\"][data-yoo-form-input] {\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n  [attr-layout-align-xl=\"start start\"][data-yoo-form-input], [attr-layout-align-xl=\"center start\"][data-yoo-form-input], [attr-layout-align-xl=\"end start\"][data-yoo-form-input], [attr-layout-align-xl=\"space-between start\"][data-yoo-form-input], [attr-layout-align-xl=\"space-around start\"][data-yoo-form-input] {\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n    -webkit-align-content: flex-start;\n    -ms-flex-line-pack: start;\n    align-content: flex-start; }\n  [attr-layout-align-xl=\"start center\"][data-yoo-form-input], [attr-layout-align-xl=\"center center\"][data-yoo-form-input], [attr-layout-align-xl=\"end center\"][data-yoo-form-input], [attr-layout-align-xl=\"space-between center\"][data-yoo-form-input], [attr-layout-align-xl=\"space-around center\"][data-yoo-form-input] {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-align-content: center;\n    -ms-flex-line-pack: center;\n    align-content: center;\n    max-width: 100%; }\n  [attr-layout-align-xl=\"start center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-xl=\"center center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-xl=\"end center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-xl=\"space-between center\"][data-yoo-form-input]    > *[data-yoo-form-input], [attr-layout-align-xl=\"space-around center\"][data-yoo-form-input]    > *[data-yoo-form-input] {\n    max-width: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout-align-xl=\"start end\"][data-yoo-form-input], [attr-layout-align-xl=\"center end\"][data-yoo-form-input], [attr-layout-align-xl=\"end end\"][data-yoo-form-input], [attr-layout-align-xl=\"space-between end\"][data-yoo-form-input], [attr-layout-align-xl=\"space-around end\"][data-yoo-form-input] {\n    -webkit-box-align: end;\n    -webkit-align-items: flex-end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n    -webkit-align-content: flex-end;\n    -ms-flex-line-pack: end;\n    align-content: flex-end; }\n  [attr-layout-align-xl=\"start stretch\"][data-yoo-form-input], [attr-layout-align-xl=\"center stretch\"][data-yoo-form-input], [attr-layout-align-xl=\"end stretch\"][data-yoo-form-input], [attr-layout-align-xl=\"space-between stretch\"][data-yoo-form-input], [attr-layout-align-xl=\"space-around stretch\"][data-yoo-form-input] {\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    -webkit-align-content: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch; }\n  [attr-flex-xl][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; } }\n\n\@media screen\\0  and (min-width: 1920px) {\n  [attr-flex-xl][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%; } }\n\n\@media (min-width: 1920px) {\n  [attr-flex-xl-grow][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl-initial][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 auto;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl-auto][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl-none][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl-noshrink][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 auto;\n    -ms-flex: 1 0 auto;\n    flex: 1 0 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl-nogrow][data-yoo-form-input] {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 auto;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 0%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"0\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 0%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"0\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"0\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 0%;\n    -ms-flex: 1 1 0%;\n    flex: 1 1 0%;\n    max-width: 100%;\n    max-height: 0%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 5%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"5\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 5%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"5\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"5\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 5%;\n    -ms-flex: 1 1 5%;\n    flex: 1 1 5%;\n    max-width: 100%;\n    max-height: 5%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 10%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"10\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 10%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"10\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"10\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 10%;\n    -ms-flex: 1 1 10%;\n    flex: 1 1 10%;\n    max-width: 100%;\n    max-height: 10%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 15%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"15\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 15%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"15\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"15\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 15%;\n    -ms-flex: 1 1 15%;\n    flex: 1 1 15%;\n    max-width: 100%;\n    max-height: 15%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 20%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"20\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 20%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"20\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"20\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 20%;\n    -ms-flex: 1 1 20%;\n    flex: 1 1 20%;\n    max-width: 100%;\n    max-height: 20%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 25%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"25\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 25%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"25\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"25\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 25%;\n    -ms-flex: 1 1 25%;\n    flex: 1 1 25%;\n    max-width: 100%;\n    max-height: 25%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 30%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"30\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 30%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"30\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"30\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 30%;\n    -ms-flex: 1 1 30%;\n    flex: 1 1 30%;\n    max-width: 100%;\n    max-height: 30%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 35%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"35\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 35%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"35\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"35\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 35%;\n    -ms-flex: 1 1 35%;\n    flex: 1 1 35%;\n    max-width: 100%;\n    max-height: 35%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 40%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"40\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 40%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"40\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"40\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 40%;\n    -ms-flex: 1 1 40%;\n    flex: 1 1 40%;\n    max-width: 100%;\n    max-height: 40%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 45%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"45\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 45%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"45\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"45\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 45%;\n    -ms-flex: 1 1 45%;\n    flex: 1 1 45%;\n    max-width: 100%;\n    max-height: 45%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 50%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"50\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 50%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"50\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"50\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 50%;\n    -ms-flex: 1 1 50%;\n    flex: 1 1 50%;\n    max-width: 100%;\n    max-height: 50%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 55%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"55\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 55%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"55\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"55\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 55%;\n    -ms-flex: 1 1 55%;\n    flex: 1 1 55%;\n    max-width: 100%;\n    max-height: 55%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 60%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"60\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 60%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"60\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"60\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 60%;\n    -ms-flex: 1 1 60%;\n    flex: 1 1 60%;\n    max-width: 100%;\n    max-height: 60%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 65%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"65\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 65%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"65\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"65\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 65%;\n    -ms-flex: 1 1 65%;\n    flex: 1 1 65%;\n    max-width: 100%;\n    max-height: 65%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 70%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"70\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 70%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"70\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"70\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 70%;\n    -ms-flex: 1 1 70%;\n    flex: 1 1 70%;\n    max-width: 100%;\n    max-height: 70%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 75%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"75\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 75%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"75\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"75\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 75%;\n    -ms-flex: 1 1 75%;\n    flex: 1 1 75%;\n    max-width: 100%;\n    max-height: 75%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 80%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"80\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 80%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"80\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"80\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 80%;\n    -ms-flex: 1 1 80%;\n    flex: 1 1 80%;\n    max-width: 100%;\n    max-height: 80%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 85%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"85\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 85%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"85\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"85\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 85%;\n    -ms-flex: 1 1 85%;\n    flex: 1 1 85%;\n    max-width: 100%;\n    max-height: 85%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 90%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"90\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 90%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"90\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"90\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 90%;\n    -ms-flex: 1 1 90%;\n    flex: 1 1 90%;\n    max-width: 100%;\n    max-height: 90%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 95%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"95\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 95%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"95\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"95\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 95%;\n    -ms-flex: 1 1 95%;\n    flex: 1 1 95%;\n    max-width: 100%;\n    max-height: 95%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-flex-xl=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"100\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"100\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"100\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 100%;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    max-width: 100%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"33\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"33\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"33\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"33\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 33%;\n    -ms-flex: 1 1 33%;\n    flex: 1 1 33%;\n    max-width: calc(100% / 3);\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"34\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"34\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"34\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"34\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 34%;\n    -ms-flex: 1 1 34%;\n    flex: 1 1 34%;\n    max-width: 34%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"66\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"66\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"66\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"66\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 66%;\n    -ms-flex: 1 1 66%;\n    flex: 1 1 66%;\n    max-width: calc(200% / 3);\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"67\"][data-yoo-form-input], [attr-layout=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"67\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"67\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input]    > [attr-flex-xl=\"67\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 67%;\n    -ms-flex: 1 1 67%;\n    flex: 1 1 67%;\n    max-width: 67%;\n    max-height: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"33\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"33\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"33\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"33\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 33%;\n    -ms-flex: 1 1 33%;\n    flex: 1 1 33%;\n    max-width: 100%;\n    max-height: calc(100% / 3);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"34\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"34\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"34\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"34\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 34%;\n    -ms-flex: 1 1 34%;\n    flex: 1 1 34%;\n    max-width: 100%;\n    max-height: 34%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"66\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"66\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"66\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"66\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 66%;\n    -ms-flex: 1 1 66%;\n    flex: 1 1 66%;\n    max-width: 100%;\n    max-height: calc(200% / 3);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"67\"][data-yoo-form-input], [attr-layout=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"67\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"67\"][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input]    > [attr-flex-xl=\"67\"][data-yoo-form-input] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 1 67%;\n    -ms-flex: 1 1 67%;\n    flex: 1 1 67%;\n    max-width: 100%;\n    max-height: 67%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  [attr-layout-xl][data-yoo-form-input], [attr-layout-xl=\"column\"][data-yoo-form-input], [attr-layout-xl=\"row\"][data-yoo-form-input] {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex; }\n  [attr-layout-xl=\"column\"][data-yoo-form-input] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column; }\n  [attr-layout-xl=\"row\"][data-yoo-form-input] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row; }\n  [attr-hide][data-yoo-form-input]:not([attr-show-gt-xs]):not([attr-show-gt-sm]):not([attr-show-gt-md]):not([attr-show-gt-lg]):not([attr-show-xl]):not([attr-show]), [attr-hide-gt-xs][data-yoo-form-input]:not([attr-show-gt-xs]):not([attr-show-gt-sm]):not([attr-show-gt-md]):not([attr-show-gt-lg]):not([attr-show-xl]):not([attr-show]), [attr-hide-gt-sm][data-yoo-form-input]:not([attr-show-gt-xs]):not([attr-show-gt-sm]):not([attr-show-gt-md]):not([attr-show-gt-lg]):not([attr-show-xl]):not([attr-show]), [attr-hide-gt-md][data-yoo-form-input]:not([attr-show-gt-xs]):not([attr-show-gt-sm]):not([attr-show-gt-md]):not([attr-show-gt-lg]):not([attr-show-xl]):not([attr-show]), [attr-hide-gt-lg][data-yoo-form-input]:not([attr-show-gt-xs]):not([attr-show-gt-sm]):not([attr-show-gt-md]):not([attr-show-gt-lg]):not([attr-show-xl]):not([attr-show]) {\n    display: none; }\n  [attr-hide-xl][data-yoo-form-input]:not([attr-show-xl]):not([attr-show-gt-lg]):not([attr-show]) {\n    display: none; } }\n\n\@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 100;\n  src: url(\"./assets/fonts/lato/Lato-Hairline.ttf\") format(\"truetype\"); }\n\n\@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 100;\n  src: url(\"./assets/fonts/lato/Lato-HairlineItalic.ttf\") format(\"truetype\"); }\n\n\@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: url(\"./assets/fonts/lato/Lato-Light.ttf\") format(\"truetype\"); }\n\n\@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: url(\"./assets/fonts/lato/Lato-LightItalic.ttf\") format(\"truetype\"); }\n\n\@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"./assets/fonts/lato/Lato-Regular.ttf\") format(\"truetype\"); }\n\n\@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: url(\"./assets/fonts/lato/Lato-Italic.ttf\") format(\"truetype\"); }\n\n\@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 600;\n  src: url(\"./assets/fonts/lato/Lato-Bold.ttf\") format(\"truetype\"); }\n\n\@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 600;\n  src: url(\"./assets/fonts/lato/Lato-BoldItalic.ttf\") format(\"truetype\"); }\n\n\@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: url(\"./assets/fonts/lato/Lato-Black.ttf\") format(\"truetype\"); }\n\n\@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: url(\"./assets/fonts/lato/Lato-BlackItalic.ttf\") format(\"truetype\"); }\n\n\@font-face {\n  font-family: 'yoobicons';\n  src: url(\"./assets/fonts/yoobicons/yoobicons.ttf\") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n[class^=\"yo-\"][data-yoo-form-input], [class*=\" yo-\"][data-yoo-form-input] {\n  font-family: 'yoobicons';\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.yo-instagram[data-yoo-form-input] {\n  margin-top: 3px; }\n\n.yo-circle-cross[data-yoo-form-input]:before {\n  content: \"\\e942\"; }\n\n.yo-hamburger[data-yoo-form-input]:before {\n  content: \"\\e91e\"; }\n\n.yo-question2[data-yoo-form-input]:before {\n  content: \"\\e91f\"; }\n\n.yo-block[data-yoo-form-input]:before {\n  content: \"\\e920\"; }\n\n.yo-fire2[data-yoo-form-input]:before {\n  content: \"\\e921\"; }\n\n.yo-arrow-right[data-yoo-form-input]:before {\n  content: \"\\e922\"; }\n\n.yo-arrow-dropdown[data-yoo-form-input]:before {\n  content: \"\\e923\"; }\n\n.yo-circle-check[data-yoo-form-input]:before {\n  content: \"\\e924\"; }\n\n.yo-trophy[data-yoo-form-input]:before {\n  content: \"\\e925\"; }\n\n.yo-survey[data-yoo-form-input]:before {\n  content: \"\\e926\"; }\n\n.yo-play[data-yoo-form-input]:before {\n  content: \"\\e927\"; }\n\n.yo-star2[data-yoo-form-input]:before {\n  content: \"\\e928\"; }\n\n.yo-calendar2[data-yoo-form-input]:before {\n  content: \"\\e929\"; }\n\n.yo-graduate-hat[data-yoo-form-input]:before {\n  content: \"\\e92a\"; }\n\n.yo-timer[data-yoo-form-input]:before {\n  content: \"\\e92b\"; }\n\n.yo-account2[data-yoo-form-input]:before {\n  content: \"\\e92c\"; }\n\n.yo-lock2[data-yoo-form-input]:before {\n  content: \"\\e92d\"; }\n\n.yo-trophy3[data-yoo-form-input]:before {\n  content: \"\\e92e\"; }\n\n.yo-yoobic2[data-yoo-form-input]:before {\n  content: \"\\e92f\"; }\n\n.yo-language[data-yoo-form-input]:before {\n  content: \"\\e930\"; }\n\n.yo-account[data-yoo-form-input]:before {\n  content: \"\\e931\"; }\n\n.yo-todo[data-yoo-form-input]:before {\n  content: \"\\e932\"; }\n\n.yo-chart-donuts[data-yoo-form-input]:before {\n  content: \"\\e933\"; }\n\n.yo-book[data-yoo-form-input]:before {\n  content: \"\\e934\"; }\n\n.yo-close2[data-yoo-form-input]:before {\n  content: \"\\e935\"; }\n\n.yo-pdf[data-yoo-form-input]:before {\n  content: \"\\e936\"; }\n\n.yo-video2[data-yoo-form-input]:before {\n  content: \"\\e937\"; }\n\n.yo-medal2[data-yoo-form-input]:before {\n  content: \"\\e938\"; }\n\n.yo-arrow-left[data-yoo-form-input]:before {\n  content: \"\\e939\"; }\n\n.yo-question3[data-yoo-form-input]:before {\n  content: \"\\e93a\"; }\n\n.yo-trophy2[data-yoo-form-input]:before {\n  content: \"\\e93b\"; }\n\n.yo-survey2[data-yoo-form-input]:before {\n  content: \"\\e93c\"; }\n\n.yo-sad-face[data-yoo-form-input]:before {\n  content: \"\\e93d\"; }\n\n.yo-video3[data-yoo-form-input]:before {\n  content: \"\\e93f\"; }\n\n.yo-graduate-hat2[data-yoo-form-input]:before {\n  content: \"\\e940\"; }\n\n.yo-timer2[data-yoo-form-input]:before {\n  content: \"\\e941\"; }\n\n.yo-diamond[data-yoo-form-input]:before {\n  content: \"\\e64b\"; }\n\n.yo-walk[data-yoo-form-input]:before {\n  content: \"\\e650\"; }\n\n.yo-euro[data-yoo-form-input]:before {\n  content: \"\\e654\"; }\n\n.yo-pound[data-yoo-form-input]:before {\n  content: \"\\e655\"; }\n\n.yo-tag[data-yoo-form-input]:before {\n  content: \"\\e66a\"; }\n\n.yo-cash[data-yoo-form-input]:before {\n  content: \"\\e66d\"; }\n\n.yo-credit-card[data-yoo-form-input]:before {\n  content: \"\\e673\"; }\n\n.yo-basket[data-yoo-form-input]:before {\n  content: \"\\e687\"; }\n\n.yo-store[data-yoo-form-input]:before {\n  content: \"\\e688\"; }\n\n.yo-chevron2-right[data-yoo-form-input]:before {\n  content: \"\\e6af\"; }\n\n.yo-chevron2-left[data-yoo-form-input]:before {\n  content: \"\\e6b0\"; }\n\n.yo-settings[data-yoo-form-input]:before {\n  content: \"\\e6bc\"; }\n\n.yo-eraser[data-yoo-form-input]:before {\n  content: \"\\e6da\"; }\n\n.yo-support[data-yoo-form-input]:before {\n  content: \"\\e6db\"; }\n\n.yo-video[data-yoo-form-input]:before {\n  content: \"\\e6e5\"; }\n\n.yo-imac[data-yoo-form-input]:before {\n  content: \"\\e6ed\"; }\n\n.yo-mobile[data-yoo-form-input]:before {\n  content: \"\\e6f3\"; }\n\n.yo-save[data-yoo-form-input]:before {\n  content: \"\\e6f4\"; }\n\n.yo-camera2[data-yoo-form-input]:before {\n  content: \"\\e6f8\"; }\n\n.yo-camera[data-yoo-form-input]:before {\n  content: \"\\e6fc\"; }\n\n.yo-redo[data-yoo-form-input]:before {\n  content: \"\\e700\"; }\n\n.yo-undo[data-yoo-form-input]:before {\n  content: \"\\e701\"; }\n\n.yo-draw[data-yoo-form-input]:before {\n  content: \"\\e702\"; }\n\n.yo-trash[data-yoo-form-input]:before {\n  content: \"\\e705\"; }\n\n.yo-edit[data-yoo-form-input]:before {\n  content: \"\\e70a\"; }\n\n.yo-sort-asc[data-yoo-form-input]:before {\n  content: \"\\e70b\"; }\n\n.yo-sort-desc[data-yoo-form-input]:before {\n  content: \"\\e70c\"; }\n\n.yo-feed[data-yoo-form-input]:before {\n  content: \"\\e716\"; }\n\n.yo-key[data-yoo-form-input]:before {\n  content: \"\\e718\"; }\n\n.yo-password[data-yoo-form-input]:before {\n  content: \"\\e71f\"; }\n\n.yo-locked[data-yoo-form-input]:before {\n  content: \"\\e720\"; }\n\n.yo-profile[data-yoo-form-input]:before {\n  content: \"\\e721\"; }\n\n.yo-people[data-yoo-form-input]:before {\n  content: \"\\e724\"; }\n\n.yo-user[data-yoo-form-input]:before {\n  content: \"\\e72c\"; }\n\n.yo-notification[data-yoo-form-input]:before {\n  content: \"\\e742\"; }\n\n.yo-plane[data-yoo-form-input]:before {\n  content: \"\\e743\"; }\n\n.yo-cog[data-yoo-form-input]:before {\n  content: \"\\e74b\"; }\n\n.yo-config[data-yoo-form-input]:before {\n  content: \"\\e74d\"; }\n\n.yo-share[data-yoo-form-input]:before {\n  content: \"\\e753\"; }\n\n.yo-code[data-yoo-form-input]:before {\n  content: \"\\e756\"; }\n\n.yo-flag[data-yoo-form-input]:before {\n  content: \"\\e75b\"; }\n\n.yo-danger[data-yoo-form-input]:before {\n  content: \"\\e762\"; }\n\n.yo-import[data-yoo-form-input]:before {\n  content: \"\\e763\"; }\n\n.yo-upload[data-yoo-form-input]:before {\n  content: \"\\e764\"; }\n\n.yo-chart-bar[data-yoo-form-input]:before {\n  content: \"\\e770\"; }\n\n.yo-geoloc[data-yoo-form-input]:before {\n  content: \"\\e77d\"; }\n\n.yo-list2[data-yoo-form-input]:before {\n  content: \"\\e789\"; }\n\n.yo-tabs[data-yoo-form-input]:before {\n  content: \"\\e792\"; }\n\n.yo-grid[data-yoo-form-input]:before {\n  content: \"\\e79c\"; }\n\n.yo-check-square[data-yoo-form-input]:before {\n  content: \"\\e79f\"; }\n\n.yo-menu[data-yoo-form-input]:before {\n  content: \"\\e7aa\"; }\n\n.yo-card[data-yoo-form-input]:before {\n  content: \"\\e7b1\"; }\n\n.yo-refresh[data-yoo-form-input]:before {\n  content: \"\\e7b2\"; }\n\n.yo-refresh-a[data-yoo-form-input]:before {\n  content: \"\\e7b4\"; }\n\n.yo-logout[data-yoo-form-input]:before {\n  content: \"\\e7b6\"; }\n\n.yo-eye[data-yoo-form-input]:before {\n  content: \"\\e7b9\"; }\n\n.yo-move[data-yoo-form-input]:before {\n  content: \"\\e7c6\"; }\n\n.yo-collapse[data-yoo-form-input]:before {\n  content: \"\\e7c8\"; }\n\n.yo-expand[data-yoo-form-input]:before {\n  content: \"\\e7c9\"; }\n\n.yo-chevron-bottom[data-yoo-form-input]:before {\n  content: \"\\e7cc\"; }\n\n.yo-chevron-right[data-yoo-form-input]:before {\n  content: \"\\e7cd\"; }\n\n.yo-chevron-top[data-yoo-form-input]:before {\n  content: \"\\e7ce\"; }\n\n.yo-chevron-left[data-yoo-form-input]:before {\n  content: \"\\e7cf\"; }\n\n.yo-circles[data-yoo-form-input]:before {\n  content: \"\\e7d0\"; }\n\n.yo-locate-me[data-yoo-form-input]:before {\n  content: \"\\e7d1\"; }\n\n.yo-circle[data-yoo-form-input]:before {\n  content: \"\\e7d5\"; }\n\n.yo-check[data-yoo-form-input]:before {\n  content: \"\\e7d6\"; }\n\n.yo-close[data-yoo-form-input]:before {\n  content: \"\\e7d7\"; }\n\n.yo-minus[data-yoo-form-input]:before {\n  content: \"\\e7d8\"; }\n\n.yo-plus[data-yoo-form-input]:before {\n  content: \"\\e7d9\"; }\n\n.yo-more[data-yoo-form-input]:before {\n  content: \"\\e7e4\"; }\n\n.yo-bell[data-yoo-form-input]:before {\n  content: \"\\e7e8\"; }\n\n.yo-google[data-yoo-form-input]:before {\n  content: \"\\e7e9\"; }\n\n.yo-chart-gauge[data-yoo-form-input]:before {\n  content: \"\\e7f1\"; }\n\n.yo-check-circle[data-yoo-form-input]:before {\n  content: \"\\e7f4\"; }\n\n.yo-close-circle[data-yoo-form-input]:before {\n  content: \"\\e7f5\"; }\n\n.yo-circle-minus[data-yoo-form-input]:before {\n  content: \"\\e7f6\"; }\n\n.yo-chevron-right-circle[data-yoo-form-input]:before {\n  content: \"\\e7fd\"; }\n\n.yo-down-arrow[data-yoo-form-input]:before {\n  content: \"\\e806\"; }\n\n.yo-right-arrow[data-yoo-form-input]:before {\n  content: \"\\e807\"; }\n\n.yo-up-arrow[data-yoo-form-input]:before {\n  content: \"\\e808\"; }\n\n.yo-left-arrow[data-yoo-form-input]:before {\n  content: \"\\e809\"; }\n\n.yo-export[data-yoo-form-input]:before {\n  content: \"\\e80a\"; }\n\n.yo-medal[data-yoo-form-input]:before {\n  content: \"\\e80d\"; }\n\n.yo-filter[data-yoo-form-input]:before {\n  content: \"\\e811\"; }\n\n.yo-degree[data-yoo-form-input]:before {\n  content: \"\\e81b\"; }\n\n.yo-trophee[data-yoo-form-input]:before {\n  content: \"\\e81f\"; }\n\n.yo-tetris[data-yoo-form-input]:before {\n  content: \"\\e822\"; }\n\n.yo-bicycle[data-yoo-form-input]:before {\n  content: \"\\e832\"; }\n\n.yo-car[data-yoo-form-input]:before {\n  content: \"\\e837\"; }\n\n.yo-building[data-yoo-form-input]:before {\n  content: \"\\e85f\"; }\n\n.yo-week[data-yoo-form-input]:before {\n  content: \"\\e867\"; }\n\n.yo-dashboard[data-yoo-form-input]:before {\n  content: \"\\e86b\"; }\n\n.yo-alarmclock[data-yoo-form-input]:before {\n  content: \"\\e86e\"; }\n\n.yo-wait[data-yoo-form-input]:before {\n  content: \"\\e86f\"; }\n\n.yo-time[data-yoo-form-input]:before {\n  content: \"\\e873\"; }\n\n.yo-calendar[data-yoo-form-input]:before {\n  content: \"\\e875\"; }\n\n.yo-info[data-yoo-form-input]:before {\n  content: \"\\e879\"; }\n\n.yo-map[data-yoo-form-input]:before {\n  content: \"\\e877\"; }\n\n.yo-map-marker2[data-yoo-form-input]:before {\n  content: \"\\e878\"; }\n\n.yo-map-marker[data-yoo-form-input]:before {\n  content: \"\\e87c\"; }\n\n.yo-signature[data-yoo-form-input]:before {\n  content: \"\\e887\"; }\n\n.yo-male[data-yoo-form-input]:before {\n  content: \"\\e88a\"; }\n\n.yo-female[data-yoo-form-input]:before {\n  content: \"\\e88b\"; }\n\n.yo-smiley[data-yoo-form-input]:before {\n  content: \"\\e893\"; }\n\n.yo-photo[data-yoo-form-input]:before {\n  content: \"\\e8a1\"; }\n\n.yo-videocall[data-yoo-form-input]:before {\n  content: \"\\e8a4\"; }\n\n.yo-briefcase[data-yoo-form-input]:before {\n  content: \"\\e8aa\"; }\n\n.yo-document[data-yoo-form-input]:before {\n  content: \"\\e8b3\"; }\n\n.yo-clipboard[data-yoo-form-input]:before {\n  content: \"\\e8b5\"; }\n\n.yo-editform[data-yoo-form-input]:before {\n  content: \"\\e8bc\"; }\n\n.yo-overview2[data-yoo-form-input]:before {\n  content: \"\\e8c1\"; }\n\n.yo-chart-pie[data-yoo-form-input]:before {\n  content: \"\\e8c6\"; }\n\n.yo-mission-list[data-yoo-form-input]:before {\n  content: \"\\e8c8\"; }\n\n.yo-archive[data-yoo-form-input]:before {\n  content: \"\\e8d7\"; }\n\n.yo-folder[data-yoo-form-input]:before {\n  content: \"\\e8dd\"; }\n\n.yo-learn[data-yoo-form-input]:before {\n  content: \"\\e8e8\"; }\n\n.yo-file[data-yoo-form-input]:before {\n  content: \"\\e8ee\"; }\n\n.yo-documents2[data-yoo-form-input]:before {\n  content: \"\\e8f2\"; }\n\n.yo-mission[data-yoo-form-input]:before {\n  content: \"\\e8f9\"; }\n\n.yo-feed2[data-yoo-form-input]:before {\n  content: \"\\e8fb\"; }\n\n.yo-gallery[data-yoo-form-input]:before {\n  content: \"\\e8fe\"; }\n\n.yo-phone[data-yoo-form-input]:before {\n  content: \"\\e902\"; }\n\n.yo-audio[data-yoo-form-input]:before {\n  content: \"\\e905\"; }\n\n.yo-enveloppe[data-yoo-form-input]:before {\n  content: \"\\e909\"; }\n\n.yo-mail[data-yoo-form-input]:before {\n  content: \"\\e90a\"; }\n\n.yo-question[data-yoo-form-input]:before {\n  content: \"\\e915\"; }\n\n.yo-chat[data-yoo-form-input]:before {\n  content: \"\\e917\"; }\n\n.yo-comment[data-yoo-form-input]:before {\n  content: \"\\e91c\"; }\n\n.yo-paypal[data-yoo-form-input]:before {\n  content: \"\\e93e\"; }\n\n.yo-two-files2[data-yoo-form-input]:before {\n  content: \"\\e85b\"; }\n\n.yo-doc-folder-a[data-yoo-form-input]:before {\n  content: \"\\e874\"; }\n\n.yo-doc-folder-cross-a[data-yoo-form-input]:before {\n  content: \"\\e876\"; }\n\n.yo-doc-folder-plus-a[data-yoo-form-input]:before {\n  content: \"\\e87a\"; }\n\n.yo-list[data-yoo-form-input]:before {\n  content: \"\\e87e\"; }\n\n.yo-image[data-yoo-form-input]:before {\n  content: \"\\e89c\"; }\n\n.yo-barcode3[data-yoo-form-input]:before {\n  content: \"\\e8a9\"; }\n\n.yo-ecommerce-creditcard-b[data-yoo-form-input]:before {\n  content: \"\\e8b1\"; }\n\n.yo-shoppingcart[data-yoo-form-input]:before {\n  content: \"\\e8c9\"; }\n\n.yo-longtext[data-yoo-form-input]:before {\n  content: \"\\e8fd\"; }\n\n.yo-shorttext[data-yoo-form-input]:before {\n  content: \"\\e8ff\"; }\n\n.yo-environment-sign[data-yoo-form-input]:before {\n  content: \"\\e919\"; }\n\n.yo-fire[data-yoo-form-input]:before {\n  content: \"\\e954\"; }\n\n.yo-toggle[data-yoo-form-input]:before {\n  content: \"\\e96e\"; }\n\n.yo-sliders[data-yoo-form-input]:before {\n  content: \"\\e973\"; }\n\n.yo-tovalidate[data-yoo-form-input]:before {\n  content: \"\\e979\"; }\n\n.yo-security[data-yoo-form-input]:before {\n  content: \"\\e9af\"; }\n\n.yo-compass[data-yoo-form-input]:before {\n  content: \"\\e9b0\"; }\n\n.yo-gameboy[data-yoo-form-input]:before {\n  content: \"\\e9c4\"; }\n\n.yo-magic[data-yoo-form-input]:before {\n  content: \"\\e9ca\"; }\n\n.yo-world[data-yoo-form-input]:before {\n  content: \"\\ea3f\"; }\n\n.yo-instagram[data-yoo-form-input]:before {\n  content: \"\\ea6f\"; }\n\n.yo-notallowed[data-yoo-form-input]:before {\n  content: \"\\eac4\"; }\n\n.yo-check-minus[data-yoo-form-input]:before {\n  content: \"\\eacd\"; }\n\n.yo-check-plus[data-yoo-form-input]:before {\n  content: \"\\eace\"; }\n\n.yo-check-tick[data-yoo-form-input]:before {\n  content: \"\\ead1\"; }\n\n.yo-circle-plus[data-yoo-form-input]:before {\n  content: \"\\ead9\"; }\n\n.yo-check-empty[data-yoo-form-input]:before {\n  content: \"\\eaf0\"; }\n\n.yo-number[data-yoo-form-input]:before {\n  content: \"\\eb05\"; }\n\n.yo-star3[data-yoo-form-input]:before {\n  content: \"\\eb20\"; }\n\n.yo-selectbuttons[data-yoo-form-input]:before {\n  content: \"\\eb22\"; }\n\n.yo-selectbuttonsmulti[data-yoo-form-input]:before {\n  content: \"\\eb2f\"; }\n\n.yo-sw-profile[data-yoo-form-input]   .path1[data-yoo-form-input]:before {\n  content: \"\\e901\";\n  color: #535353; }\n\n.yo-sw-profile[data-yoo-form-input]   .path2[data-yoo-form-input]:before {\n  content: \"\\e903\";\n  margin-left: -1em;\n  color: #535353; }\n\n.yo-sw-profile[data-yoo-form-input]   .path3[data-yoo-form-input]:before {\n  content: \"\\e904\";\n  margin-left: -1em;\n  color: #d8d8d8; }\n\n.yo-sw-profile[data-yoo-form-input]   .path4[data-yoo-form-input]:before {\n  content: \"\\e906\";\n  margin-left: -1em;\n  color: #535353; }\n\n.yo-wide-file[data-yoo-form-input]:before {\n  content: \"\\e602\"; }\n\n.yo-documents[data-yoo-form-input]:before {\n  content: \"\\e60c\"; }\n\n.yo-group[data-yoo-form-input]:before {\n  content: \"\\e60d\"; }\n\n.yo-overview[data-yoo-form-input]:before {\n  content: \"\\e60e\"; }\n\n.yo-photo2[data-yoo-form-input]:before {\n  content: \"\\e60f\"; }\n\n.yo-talk-female[data-yoo-form-input]:before {\n  content: \"\\e610\"; }\n\n.yo-settings-user[data-yoo-form-input]:before {\n  content: \"\\e611\"; }\n\n.yo-skycrapers[data-yoo-form-input]:before {\n  content: \"\\e612\"; }\n\n.yo-two-files[data-yoo-form-input]:before {\n  content: \"\\e613\"; }\n\n.yo-missions[data-yoo-form-input]:before {\n  content: \"\\e911\"; }\n\n.yo-polls[data-yoo-form-input]:before {\n  content: \"\\e908\"; }\n\n.yo-services[data-yoo-form-input]:before {\n  content: \"\\e90b\"; }\n\n.yo-todos[data-yoo-form-input]:before {\n  content: \"\\e90c\"; }\n\n.yo-deploy[data-yoo-form-input]:before {\n  content: \"\\e900\"; }\n\n.yo-more-full[data-yoo-form-input]:before {\n  content: \"\\e60b\"; }\n\n.yo-question-add[data-yoo-form-input]:before {\n  content: \"\\e60a\"; }\n\n.yo-filter-active[data-yoo-form-input]:before {\n  content: \"\\e614\"; }\n\n.yo-more-v[data-yoo-form-input]:before {\n  content: \"\\e609\"; }\n\n.yo-eye-01[data-yoo-form-input]:before {\n  content: \"\\e605\"; }\n\n.yo-eye-full[data-yoo-form-input]:before {\n  content: \"\\e606\"; }\n\n.yo-yoobic-line[data-yoo-form-input]:before {\n  content: \"\\e615\"; }\n\n.yo-yoobic[data-yoo-form-input]:before {\n  content: \"\\e600\"; }\n\n.yo-invite[data-yoo-form-input]:before {\n  content: \"\\e912\"; }\n\n.yo-palette[data-yoo-form-input]:before {\n  content: \"\\e91d\"; }\n\n.yo-svg-play[data-yoo-form-input]:before {\n  content: \"\\e913\"; }\n\n.yo-airplane[data-yoo-form-input]:before {\n  content: \"\\e914\"; }\n\n.yo-paperplane2[data-yoo-form-input]:before {\n  content: \"\\e918\"; }\n\n.yo-workplace[data-yoo-form-input]:before {\n  content: \"\\e91b\"; }\n\n.yo-servers[data-yoo-form-input]:before {\n  content: \"\\e91a\"; }\n\n.yo-notification2[data-yoo-form-input]:before {\n  content: \"\\e916\"; }\n\n.yo-time-history[data-yoo-form-input]:before {\n  content: \"\\e90d\"; }\n\n.yo-time-timesheet[data-yoo-form-input]:before {\n  content: \"\\e90e\"; }\n\n.yo-time-overview[data-yoo-form-input]:before {\n  content: \"\\e90f\"; }\n\n.yo-time-menu[data-yoo-form-input]:before {\n  content: \"\\e910\"; }\n\n.yo-barcode2[data-yoo-form-input]:before {\n  content: \"\\e907\"; }\n\n.yo-like[data-yoo-form-input]:before {\n  content: \"\\e604\"; }\n\n.yo-study[data-yoo-form-input]:before {\n  content: \"\\e603\"; }\n\n.yo-star-full[data-yoo-form-input]:before {\n  content: \"\\f005\"; }\n\n.yo-star[data-yoo-form-input]:before {\n  content: \"\\f006\"; }\n\n.yo-file-pdf[data-yoo-form-input]:before {\n  content: \"\\f1c1\"; }\n\n.yo-file-word[data-yoo-form-input]:before {\n  content: \"\\f1c2\"; }\n\n.yo-file-excel[data-yoo-form-input]:before {\n  content: \"\\f1c3\"; }\n\n.yo-file-powerpoint[data-yoo-form-input]:before {\n  content: \"\\f1c4\"; }\n\n.yo-target[data-yoo-form-input]:before {\n  content: \"\\e608\"; }\n\n.yo-barcode[data-yoo-form-input]:before {\n  content: \"\\e607\"; }\n\n.yo-coin[data-yoo-form-input]:before {\n  content: \"\\e601\"; }\n\nbody[data-yoo-form-input] {\n  font-family: \"Lato\";\n  font-size: 16px;\n  line-height: 1.5; }\n\n[data-yoo-form-input]:root {\n  --font-size: 16px;\n  --backdrop: rgba(49, 44, 87, 0.6);\n  --light: #FFFFFF;\n  --stable: #EBECEF;\n  --text-color: #3A3569;\n  --dark: #3A3569;\n  --dark-110: #34305f;\n  --dark-120: #2e2a54;\n  --dark-80: #544d98;\n  --dark-60: #7973b8;\n  --dark-40: #a6a1d0;\n  --dark-20: #d2d0e7;\n  --dark-10: #e9e8f3;\n  --dark-05: #f4f3f9;\n  --accent: #1C76FC;\n  --accent-110: #0366f9;\n  --accent-120: #035bdd;\n  --accent-20: #d2e4fe;\n  --accent-10: #e8f1ff;\n  --accent-05: #f4f8ff;\n  --danger: #ef6e7f;\n  --danger-110: #ec4f63;\n  --danger-120: #e82f48;\n  --danger-20: #fce2e5;\n  --danger-10: #fdf1f2;\n  --danger-05: #fef8f9;\n  --success: #07ccc0;\n  --success-110: #06b8ad;\n  --success-120: #06a39a;\n  --success-20: #c5fdfa;\n  --success-10: #e2fefc;\n  --success-05: #f1fffe;\n  --warning: #F2C83A;\n  --warning-110: #f0c01e;\n  --warning-120: #e1b10f;\n  --warning-20: #fcf4d8;\n  --warning-10: #fefaeb;\n  --warning-05: #fefcf5;\n  --info: #6A61FF;\n  --info-110: #5a52da;\n  --info-120: #4b44b7;\n  --info-20: #e1dfff;\n  --info-10: #f0efff;\n  --info-05: #f8f7ff;\n  --transparent: transparent;\n  --gradient-accent: linear-gradient(90deg, #1C76FC 0%, #D6E7FF 160.99%);\n  --gradient-danger: linear-gradient(264deg, #febd3c, #f76c6c);\n  --gradient-info: linear-gradient(264deg, #f564b6, #6f3cfe);\n  --gradient-success: linear-gradient(to top, #09f094, #07cac2);\n  --gradient-warning: linear-gradient(90deg, #F2C83A 0%, #FFE385 160.99%);\n  --gradient-dark: linear-gradient(90deg, #3A3569 0%, #4334A3 102.47%);\n  --ion-color-primary: #1C76FC;\n  --ion-color-secondary: #07ccc0;\n  --ion-color-tertiary: #6A61FF;\n  --ion-color-success: #07ccc0;\n  --ion-color-warning: #F2C83A;\n  --ion-color-danger: #ef6e7f;\n  --ion-color-light: #FFFFFF;\n  --ion-color-medium: #EBECEF;\n  --ion-color-dark: #3A3569; }\n\n.bg-backdrop[data-yoo-form-input] {\n  background: var(--backdrop, rgba(49, 44, 87, 0.6)); }\n\n.backdrop[data-yoo-form-input] {\n  color: var(--backdrop, rgba(49, 44, 87, 0.6)); }\n\n.bg-light[data-yoo-form-input] {\n  background: var(--light, #FFFFFF); }\n\n.light[data-yoo-form-input] {\n  color: var(--light, #FFFFFF); }\n\n.bg-stable[data-yoo-form-input] {\n  background: var(--stable, #EBECEF); }\n\n.stable[data-yoo-form-input] {\n  color: var(--stable, #EBECEF); }\n\n.bg-text-color[data-yoo-form-input] {\n  background: var(--text-color, #3A3569); }\n\n.text-color[data-yoo-form-input] {\n  color: var(--text-color, #3A3569); }\n\n.bg-dark[data-yoo-form-input] {\n  background: var(--dark, #3A3569); }\n\n.dark[data-yoo-form-input] {\n  color: var(--dark, #3A3569); }\n\n.bg-dark-110[data-yoo-form-input] {\n  background: var(--dark-110, #34305f); }\n\n.dark-110[data-yoo-form-input] {\n  color: var(--dark-110, #34305f); }\n\n.bg-dark-120[data-yoo-form-input] {\n  background: var(--dark-120, #2e2a54); }\n\n.dark-120[data-yoo-form-input] {\n  color: var(--dark-120, #2e2a54); }\n\n.bg-dark-80[data-yoo-form-input] {\n  background: var(--dark-80, #544d98); }\n\n.dark-80[data-yoo-form-input] {\n  color: var(--dark-80, #544d98); }\n\n.bg-dark-60[data-yoo-form-input] {\n  background: var(--dark-60, #7973b8); }\n\n.dark-60[data-yoo-form-input] {\n  color: var(--dark-60, #7973b8); }\n\n.bg-dark-40[data-yoo-form-input] {\n  background: var(--dark-40, #a6a1d0); }\n\n.dark-40[data-yoo-form-input] {\n  color: var(--dark-40, #a6a1d0); }\n\n.bg-dark-20[data-yoo-form-input] {\n  background: var(--dark-20, #d2d0e7); }\n\n.dark-20[data-yoo-form-input] {\n  color: var(--dark-20, #d2d0e7); }\n\n.bg-dark-10[data-yoo-form-input] {\n  background: var(--dark-10, #e9e8f3); }\n\n.dark-10[data-yoo-form-input] {\n  color: var(--dark-10, #e9e8f3); }\n\n.bg-dark-05[data-yoo-form-input] {\n  background: var(--dark-05, #f4f3f9); }\n\n.dark-05[data-yoo-form-input] {\n  color: var(--dark-05, #f4f3f9); }\n\n.bg-accent[data-yoo-form-input] {\n  background: var(--accent, #1C76FC); }\n\n.accent[data-yoo-form-input] {\n  color: var(--accent, #1C76FC); }\n\n.bg-accent-110[data-yoo-form-input] {\n  background: var(--accent-110, #0366f9); }\n\n.accent-110[data-yoo-form-input] {\n  color: var(--accent-110, #0366f9); }\n\n.bg-accent-120[data-yoo-form-input] {\n  background: var(--accent-120, #035bdd); }\n\n.accent-120[data-yoo-form-input] {\n  color: var(--accent-120, #035bdd); }\n\n.bg-accent-20[data-yoo-form-input] {\n  background: var(--accent-20, #d2e4fe); }\n\n.accent-20[data-yoo-form-input] {\n  color: var(--accent-20, #d2e4fe); }\n\n.bg-accent-10[data-yoo-form-input] {\n  background: var(--accent-10, #e8f1ff); }\n\n.accent-10[data-yoo-form-input] {\n  color: var(--accent-10, #e8f1ff); }\n\n.bg-accent-05[data-yoo-form-input] {\n  background: var(--accent-05, #f4f8ff); }\n\n.accent-05[data-yoo-form-input] {\n  color: var(--accent-05, #f4f8ff); }\n\n.bg-danger[data-yoo-form-input] {\n  background: var(--danger, #ef6e7f); }\n\n.danger[data-yoo-form-input] {\n  color: var(--danger, #ef6e7f); }\n\n.bg-danger-110[data-yoo-form-input] {\n  background: var(--danger-110, #ec4f63); }\n\n.danger-110[data-yoo-form-input] {\n  color: var(--danger-110, #ec4f63); }\n\n.bg-danger-120[data-yoo-form-input] {\n  background: var(--danger-120, #e82f48); }\n\n.danger-120[data-yoo-form-input] {\n  color: var(--danger-120, #e82f48); }\n\n.bg-danger-20[data-yoo-form-input] {\n  background: var(--danger-20, #fce2e5); }\n\n.danger-20[data-yoo-form-input] {\n  color: var(--danger-20, #fce2e5); }\n\n.bg-danger-10[data-yoo-form-input] {\n  background: var(--danger-10, #fdf1f2); }\n\n.danger-10[data-yoo-form-input] {\n  color: var(--danger-10, #fdf1f2); }\n\n.bg-danger-05[data-yoo-form-input] {\n  background: var(--danger-05, #fef8f9); }\n\n.danger-05[data-yoo-form-input] {\n  color: var(--danger-05, #fef8f9); }\n\n.bg-success[data-yoo-form-input] {\n  background: var(--success, #07ccc0); }\n\n.success[data-yoo-form-input] {\n  color: var(--success, #07ccc0); }\n\n.bg-success-110[data-yoo-form-input] {\n  background: var(--success-110, #06b8ad); }\n\n.success-110[data-yoo-form-input] {\n  color: var(--success-110, #06b8ad); }\n\n.bg-success-120[data-yoo-form-input] {\n  background: var(--success-120, #06a39a); }\n\n.success-120[data-yoo-form-input] {\n  color: var(--success-120, #06a39a); }\n\n.bg-success-20[data-yoo-form-input] {\n  background: var(--success-20, #c5fdfa); }\n\n.success-20[data-yoo-form-input] {\n  color: var(--success-20, #c5fdfa); }\n\n.bg-success-10[data-yoo-form-input] {\n  background: var(--success-10, #e2fefc); }\n\n.success-10[data-yoo-form-input] {\n  color: var(--success-10, #e2fefc); }\n\n.bg-success-05[data-yoo-form-input] {\n  background: var(--success-05, #f1fffe); }\n\n.success-05[data-yoo-form-input] {\n  color: var(--success-05, #f1fffe); }\n\n.bg-warning[data-yoo-form-input] {\n  background: var(--warning, #F2C83A); }\n\n.warning[data-yoo-form-input] {\n  color: var(--warning, #F2C83A); }\n\n.bg-warning-110[data-yoo-form-input] {\n  background: var(--warning-110, #f0c01e); }\n\n.warning-110[data-yoo-form-input] {\n  color: var(--warning-110, #f0c01e); }\n\n.bg-warning-120[data-yoo-form-input] {\n  background: var(--warning-120, #e1b10f); }\n\n.warning-120[data-yoo-form-input] {\n  color: var(--warning-120, #e1b10f); }\n\n.bg-warning-20[data-yoo-form-input] {\n  background: var(--warning-20, #fcf4d8); }\n\n.warning-20[data-yoo-form-input] {\n  color: var(--warning-20, #fcf4d8); }\n\n.bg-warning-10[data-yoo-form-input] {\n  background: var(--warning-10, #fefaeb); }\n\n.warning-10[data-yoo-form-input] {\n  color: var(--warning-10, #fefaeb); }\n\n.bg-warning-05[data-yoo-form-input] {\n  background: var(--warning-05, #fefcf5); }\n\n.warning-05[data-yoo-form-input] {\n  color: var(--warning-05, #fefcf5); }\n\n.bg-info[data-yoo-form-input] {\n  background: var(--info, #6A61FF); }\n\n.info[data-yoo-form-input] {\n  color: var(--info, #6A61FF); }\n\n.bg-info-110[data-yoo-form-input] {\n  background: var(--info-110, #5a52da); }\n\n.info-110[data-yoo-form-input] {\n  color: var(--info-110, #5a52da); }\n\n.bg-info-120[data-yoo-form-input] {\n  background: var(--info-120, #4b44b7); }\n\n.info-120[data-yoo-form-input] {\n  color: var(--info-120, #4b44b7); }\n\n.bg-info-20[data-yoo-form-input] {\n  background: var(--info-20, #e1dfff); }\n\n.info-20[data-yoo-form-input] {\n  color: var(--info-20, #e1dfff); }\n\n.bg-info-10[data-yoo-form-input] {\n  background: var(--info-10, #f0efff); }\n\n.info-10[data-yoo-form-input] {\n  color: var(--info-10, #f0efff); }\n\n.bg-info-05[data-yoo-form-input] {\n  background: var(--info-05, #f8f7ff); }\n\n.info-05[data-yoo-form-input] {\n  color: var(--info-05, #f8f7ff); }\n\n.bg-transparent[data-yoo-form-input] {\n  background: var(--transparent, transparent); }\n\n.transparent[data-yoo-form-input] {\n  color: var(--transparent, transparent); }\n\n.bg-gradient-accent[data-yoo-form-input] {\n  background: var(--gradient-accent, linear-gradient(90deg, #1C76FC 0%, #D6E7FF 160.99%)); }\n\n.gradient-accent[data-yoo-form-input] {\n  color: var(--gradient-accent, linear-gradient(90deg, #1C76FC 0%, #D6E7FF 160.99%)); }\n\n.bg-gradient-danger[data-yoo-form-input] {\n  background: var(--gradient-danger, linear-gradient(264deg, #febd3c, #f76c6c)); }\n\n.gradient-danger[data-yoo-form-input] {\n  color: var(--gradient-danger, linear-gradient(264deg, #febd3c, #f76c6c)); }\n\n.bg-gradient-info[data-yoo-form-input] {\n  background: var(--gradient-info, linear-gradient(264deg, #f564b6, #6f3cfe)); }\n\n.gradient-info[data-yoo-form-input] {\n  color: var(--gradient-info, linear-gradient(264deg, #f564b6, #6f3cfe)); }\n\n.bg-gradient-success[data-yoo-form-input] {\n  background: var(--gradient-success, linear-gradient(to top, #09f094, #07cac2)); }\n\n.gradient-success[data-yoo-form-input] {\n  color: var(--gradient-success, linear-gradient(to top, #09f094, #07cac2)); }\n\n.bg-gradient-warning[data-yoo-form-input] {\n  background: var(--gradient-warning, linear-gradient(90deg, #F2C83A 0%, #FFE385 160.99%)); }\n\n.gradient-warning[data-yoo-form-input] {\n  color: var(--gradient-warning, linear-gradient(90deg, #F2C83A 0%, #FFE385 160.99%)); }\n\n.bg-gradient-dark[data-yoo-form-input] {\n  background: var(--gradient-dark, linear-gradient(90deg, #3A3569 0%, #4334A3 102.47%)); }\n\n.gradient-dark[data-yoo-form-input] {\n  color: var(--gradient-dark, linear-gradient(90deg, #3A3569 0%, #4334A3 102.47%)); }\n\n.bg-ion-color-primary[data-yoo-form-input] {\n  background: var(--ion-color-primary, #1C76FC); }\n\n.ion-color-primary[data-yoo-form-input] {\n  color: var(--ion-color-primary, #1C76FC); }\n\n.bg-ion-color-secondary[data-yoo-form-input] {\n  background: var(--ion-color-secondary, #07ccc0); }\n\n.ion-color-secondary[data-yoo-form-input] {\n  color: var(--ion-color-secondary, #07ccc0); }\n\n.bg-ion-color-tertiary[data-yoo-form-input] {\n  background: var(--ion-color-tertiary, #6A61FF); }\n\n.ion-color-tertiary[data-yoo-form-input] {\n  color: var(--ion-color-tertiary, #6A61FF); }\n\n.bg-ion-color-success[data-yoo-form-input] {\n  background: var(--ion-color-success, #07ccc0); }\n\n.ion-color-success[data-yoo-form-input] {\n  color: var(--ion-color-success, #07ccc0); }\n\n.bg-ion-color-warning[data-yoo-form-input] {\n  background: var(--ion-color-warning, #F2C83A); }\n\n.ion-color-warning[data-yoo-form-input] {\n  color: var(--ion-color-warning, #F2C83A); }\n\n.bg-ion-color-danger[data-yoo-form-input] {\n  background: var(--ion-color-danger, #ef6e7f); }\n\n.ion-color-danger[data-yoo-form-input] {\n  color: var(--ion-color-danger, #ef6e7f); }\n\n.bg-ion-color-light[data-yoo-form-input] {\n  background: var(--ion-color-light, #FFFFFF); }\n\n.ion-color-light[data-yoo-form-input] {\n  color: var(--ion-color-light, #FFFFFF); }\n\n.bg-ion-color-medium[data-yoo-form-input] {\n  background: var(--ion-color-medium, #EBECEF); }\n\n.ion-color-medium[data-yoo-form-input] {\n  color: var(--ion-color-medium, #EBECEF); }\n\n.bg-ion-color-dark[data-yoo-form-input] {\n  background: var(--ion-color-dark, #3A3569); }\n\n.ion-color-dark[data-yoo-form-input] {\n  color: var(--ion-color-dark, #3A3569); }\n\nh1[data-yoo-form-input] {\n  font-size: 1.75rem;\n  font-weight: bold;\n  line-height: 1.29;\n  letter-spacing: -0.5px; }\n\nh2[data-yoo-form-input] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  line-height: 1.33;\n  letter-spacing: -0.3px; }\n\nh3[data-yoo-form-input] {\n  font-size: 1.125rem;\n  font-weight: bold;\n  line-height: 1.33;\n  letter-spacing: -0.2px; }\n\n.caption[data-yoo-form-input] {\n  font-size: 0.875rem;\n  line-height: 1.71; }\n\n.tiny[data-yoo-form-input] {\n  font-size: 0.75rem;\n  line-height: 1.33; }\n\n.label[data-yoo-form-input] {\n  font-size: 0.75rem;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  line-height: 1.33;\n  font-weight: bold; }\n\n*[data-yoo-form-input], *[data-yoo-form-input]:after, *[data-yoo-form-input]:before {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n[data-yoo-form-input-host] {\n  display: block; }\n  [data-yoo-form-input-host]   .input-container[data-yoo-form-input] {\n    border: 1px solid var(--dark-20, #d2d0e7);\n    border-radius: 2px;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex; }\n    [data-yoo-form-input-host]   .input-container[data-yoo-form-input]   .icon-prefix[data-yoo-form-input], [data-yoo-form-input-host]   .input-container[data-yoo-form-input]   .icon-suffix[data-yoo-form-input] {\n      padding: 0.5rem 1rem;\n      background: var(--dark-10, #e9e8f3);\n      color: var(--dark, #3A3569); }\n    [data-yoo-form-input-host]   .input-container[data-yoo-form-input]   .icon-prefix[data-yoo-form-input] {\n      border-right: 1px solid var(--dark-20, #d2d0e7); }\n    [data-yoo-form-input-host]   .input-container[data-yoo-form-input]   .icon-suffix[data-yoo-form-input] {\n      border-left: 1px solid var(--dark-20, #d2d0e7); }\n    [data-yoo-form-input-host]   .input-container[data-yoo-form-input]   input[data-yoo-form-input] {\n      padding: 0.5rem 1rem;\n      font-size: 1rem;\n      line-height: 1.5;\n      text-align: left;\n      position: relative;\n      display: block;\n      -webkit-box-flex: 1;\n      -webkit-flex: 1;\n      -ms-flex: 1;\n      flex: 1;\n      width: 100%;\n      border: none;\n      color: var(--dark, #3A3569);\n      -webkit-box-shadow: white 0px 0px 0px 1000px inset !important;\n      box-shadow: white 0px 0px 0px 1000px inset !important;\n      -webkit-box-sizing: border-box;\n      box-sizing: border-box; }\n      [data-yoo-form-input-host]   .input-container[data-yoo-form-input]   input[data-yoo-form-input]::-webkit-input-placeholder {\n        color: var(--dark-20, #d2d0e7);\n        font-weight: 100; }\n      [data-yoo-form-input-host]   .input-container[data-yoo-form-input]   input[data-yoo-form-input]:-moz-placeholder {\n        color: var(--dark-20, #d2d0e7);\n        font-weight: 100; }\n      [data-yoo-form-input-host]   .input-container[data-yoo-form-input]   input[data-yoo-form-input]::-moz-placeholder {\n        color: var(--dark-20, #d2d0e7);\n        font-weight: 100; }\n      [data-yoo-form-input-host]   .input-container[data-yoo-form-input]   input[data-yoo-form-input]:-ms-input-placeholder {\n        color: var(--dark-20, #d2d0e7);\n        font-weight: 100; }\n      [data-yoo-form-input-host]   .input-container[data-yoo-form-input]   input[data-yoo-form-input]:focus {\n        outline: none;\n        border-color: var(--accent, #1C76FC);\n        background-color: var(--accent-05, #f4f8ff); }\n      [data-yoo-form-input-host]   .input-container[data-yoo-form-input]   input[data-yoo-form-input]:hover:not(:focus) {\n        border-color: var(--dark-40, #a6a1d0); }\n  [data-yoo-form-input-host]   .placeholderlabel[data-yoo-form-input] {\n    margin-top: 0.5rem; }\n    [data-yoo-form-input-host]   .placeholderlabel.active[data-yoo-form-input] {\n      margin-top: 0rem; }\n  [data-yoo-form-input-host]   .label[data-yoo-form-input] {\n    font-size: 0.75rem;\n    line-height: 1.5;\n    letter-spacing: 2px;\n    text-align: left;\n    color: var(--dark-40, #a6a1d0);\n    margin-bottom: 0.25rem;\n    -webkit-transform: translateY(1.875rem);\n            transform: translateY(1.875rem);\n    transition: -webkit-transform 0.2s ease-in;\n    -webkit-transition: -webkit-transform 0.2s ease-in;\n    transition: transform 0.2s ease-in;\n    transition: transform 0.2s ease-in, -webkit-transform 0.2s ease-in; }\n    [data-yoo-form-input-host]   .label.active[data-yoo-form-input] {\n      margin-top: 0.25rem;\n      -webkit-transform: translateY(0rem);\n              transform: translateY(0rem); }\n    [data-yoo-form-input-host]   .label[data-yoo-form-input]   .label-required[data-yoo-form-input] {\n      margin-left: 0.25rem;\n      color: var(--danger, #ef6e7f); }\n  [data-yoo-form-input-host]   .hint[data-yoo-form-input] {\n    font-size: 0.75rem;\n    line-height: 1.33;\n    text-align: left;\n    color: var(--dark-40, #a6a1d0);\n    margin-top: 0.25rem;\n    margin-bottom: 0.25rem; }\n  [data-yoo-form-input-host]   .description[data-yoo-form-input] {\n    color: var(--dark, #3A3569); }\n\n.small[data-yoo-form-input-host]   .input-container[data-yoo-form-input]   input[data-yoo-form-input] {\n  padding: 0.1875rem 1rem; }\n\n.small[data-yoo-form-input-host]   .input-container[data-yoo-form-input]   .icon-prefix[data-yoo-form-input], .small[data-yoo-form-input-host]   .input-container[data-yoo-form-input]   .icon-suffix[data-yoo-form-input] {\n  padding: 0.1875rem 1rem; }\n\n.dark[data-yoo-form-input-host]   .input-container[data-yoo-form-input]   input[data-yoo-form-input]:not(:focus) {\n  background: var(--dark, #3A3569); }\n\n.dark[data-yoo-form-input-host]   .input-container[data-yoo-form-input]   .icon-prefix[data-yoo-form-input] {\n  border-right: none; }\n\n.dark[data-yoo-form-input-host]   .input-container[data-yoo-form-input]   .icon-suffix[data-yoo-form-input] {\n  border-left: none; }\n\n.simple[data-yoo-form-input-host]   .input-container[data-yoo-form-input] {\n  border: none;\n  border-bottom: 1px solid var(--dark-20, #d2d0e7); }\n  .simple[data-yoo-form-input-host]   .input-container[data-yoo-form-input]   .icon-suffix[data-yoo-form-input] {\n    padding: 0rem;\n    padding-left: 0.5rem;\n    padding-top: 0.9rem;\n    background: transparent;\n    color: var(--dark, #3A3569);\n    border-left: none;\n    font-size: 0.75rem; }\n  .simple[data-yoo-form-input-host]   .input-container[data-yoo-form-input]   input[data-yoo-form-input] {\n    padding: 0.5rem 0; }"; }
}

var tippy_all = createCommonjsModule(function (module, exports) {
/*!
* Tippy.js v2.5.2
* (c) 2017-2018 atomiks
* MIT
*/
(function (global, factory) {
	module.exports = factory();
}(commonjsGlobal, (function () {
var styles = ".tippy-touch{cursor:pointer!important}.tippy-notransition{transition:none!important}.tippy-popper{max-width:350px;-webkit-perspective:700px;perspective:700px;z-index:9999;outline:0;transition-timing-function:cubic-bezier(.165,.84,.44,1);pointer-events:none;line-height:1.4}.tippy-popper[data-html]{max-width:96%;max-width:calc(100% - 20px)}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-8px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:7px solid #333;border-right:7px solid transparent;border-left:7px solid transparent;bottom:-7px;margin:0 6px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 90%;transform-origin:0 90%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-50%,25%);transform:scale(6) translate(-50%,25%);opacity:1}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1) translate(-50%,25%);transform:scale(1) translate(-50%,25%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px) rotateX(0);transform:translateY(-10px) rotateX(0)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(90deg);transform:translateY(0) rotateX(90deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px) scale(1);transform:translateY(-10px) scale(1)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(0);transform:translateY(0) scale(0)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-8px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(0);transform:rotate(0)}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:7px solid #333;border-right:7px solid transparent;border-left:7px solid transparent;top:-7px;margin:0 6px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -90%;transform-origin:0 -90%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-50%,-125%);transform:scale(6) translate(-50%,-125%);opacity:1}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1) translate(-50%,-125%);transform:scale(1) translate(-50%,-125%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateY(10px) rotateX(0);transform:translateY(10px) rotateX(0)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(-90deg);transform:translateY(0) rotateX(-90deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateY(10px) scale(1);transform:translateY(10px) scale(1)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(0);transform:translateY(0) scale(0)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-16px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:7px solid #333;border-top:7px solid transparent;border-bottom:7px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:100% 0;transform-origin:100% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(40%,-50%);transform:scale(6) translate(40%,-50%);opacity:1}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1.5) translate(40%,-50%);transform:scale(1.5) translate(40%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px) rotateY(0);transform:translateX(-10px) rotateY(0)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(-90deg);transform:translateX(0) rotateY(-90deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px) scale(1);transform:translateX(-10px) scale(1)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(0);transform:translateX(0) scale(0)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-16px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:7px solid #333;border-top:7px solid transparent;border-bottom:7px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-100% 0;transform-origin:-100% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-140%,-50%);transform:scale(6) translate(-140%,-50%);opacity:1}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1.5) translate(-140%,-50%);transform:scale(1.5) translate(-140%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateX(10px) rotateY(0);transform:translateX(10px) rotateY(0)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(90deg);transform:translateX(0) rotateY(90deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateX(10px) scale(1);transform:translateX(10px) scale(1)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(0);transform:translateX(0) scale(0)}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:.9rem;padding:.3rem .6rem;text-align:center;will-change:transform;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#333}.tippy-tooltip[data-size=small]{padding:.2rem .4rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.4rem .8rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:transparent}.tippy-tooltip[data-animatefill] .tippy-content{transition:-webkit-clip-path cubic-bezier(.46,.1,.52,.98);transition:clip-path cubic-bezier(.46,.1,.52,.98);transition:clip-path cubic-bezier(.46,.1,.52,.98),-webkit-clip-path cubic-bezier(.46,.1,.52,.98)}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.53,2,.36,.85)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:24px;height:8px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;will-change:transform;background-color:#333;border-radius:50%;width:26%;left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:\"\";float:left;padding-top:100%}body:not(.tippy-touch) .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(100% 100% at 50% 50%);clip-path:ellipse(100% 100% at 50% 50%)}body:not(.tippy-touch) .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(5% 50% at 50% 50%);clip-path:ellipse(5% 50% at 50% 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=right] .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(135% 100% at 0 50%);clip-path:ellipse(135% 100% at 0 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=right] .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(40% 100% at 0 50%);clip-path:ellipse(40% 100% at 0 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=left] .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(135% 100% at 100% 50%);clip-path:ellipse(135% 100% at 100% 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=left] .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(40% 100% at 100% 50%);clip-path:ellipse(40% 100% at 100% 50%)}@media (max-width:360px){.tippy-popper{max-width:96%;max-width:calc(100% - 20px)}}";

var version = "2.5.2";

var isBrowser = typeof window !== 'undefined';

var isIE = isBrowser && /MSIE |Trident\//.test(navigator.userAgent);

var browser = {};

if (isBrowser) {
  browser.supported = 'requestAnimationFrame' in window;
  browser.supportsTouch = 'ontouchstart' in window;
  browser.usingTouch = false;
  browser.dynamicInputDetection = true;
  browser.iOS = /iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream;
  browser.onUserInputChange = function () {};
}

/**
 * Selector constants used for grabbing elements
 */
var selectors = {
  POPPER: '.tippy-popper',
  TOOLTIP: '.tippy-tooltip',
  CONTENT: '.tippy-content',
  BACKDROP: '.tippy-backdrop',
  ARROW: '.tippy-arrow',
  ROUND_ARROW: '.tippy-roundarrow',
  REFERENCE: '[data-tippy]'
};

var defaults = {
  placement: 'top',
  livePlacement: true,
  trigger: 'mouseenter focus',
  animation: 'shift-away',
  html: false,
  animateFill: true,
  arrow: false,
  delay: 0,
  duration: [350, 300],
  interactive: false,
  interactiveBorder: 2,
  theme: 'dark',
  size: 'regular',
  distance: 10,
  offset: 0,
  hideOnClick: true,
  multiple: false,
  followCursor: false,
  inertia: false,
  updateDuration: 350,
  sticky: false,
  appendTo: function appendTo() {
    return document.body;
  },
  zIndex: 9999,
  touchHold: false,
  performance: false,
  dynamicTitle: false,
  flip: true,
  flipBehavior: 'flip',
  arrowType: 'sharp',
  arrowTransform: '',
  maxWidth: '',
  target: null,
  allowTitleHTML: true,
  popperOptions: {},
  createPopperInstanceOnInit: false,
  onShow: function onShow() {},
  onShown: function onShown() {},
  onHide: function onHide() {},
  onHidden: function onHidden() {}
};

/**
 * The keys of the defaults object for reducing down into a new object
 * Used in `getIndividualOptions()`
 */
var defaultsKeys = browser.supported && Object.keys(defaults);

/**
 * Determines if a value is an object literal
 * @param {*} value
 * @return {Boolean}
 */
function isObjectLiteral(value) {
  return {}.toString.call(value) === '[object Object]';
}

/**
 * Ponyfill for Array.from
 * @param {*} value
 * @return {Array}
 */
function toArray(value) {
  return [].slice.call(value);
}

/**
 * Returns an array of elements based on the selector input
 * @param {String|Element|Element[]|NodeList|Object} selector
 * @return {Element[]}
 */
function getArrayOfElements(selector) {
  if (selector instanceof Element || isObjectLiteral(selector)) {
    return [selector];
  }

  if (selector instanceof NodeList) {
    return toArray(selector);
  }

  if (Array.isArray(selector)) {
    return selector;
  }

  try {
    return toArray(document.querySelectorAll(selector));
  } catch (_) {
    return [];
  }
}

/**
 * Polyfills needed props/methods for a virtual reference object
 * NOTE: in v3.0 this will be pure
 * @param {Object} reference
 */
function polyfillVirtualReferenceProps(reference) {
  reference.refObj = true;
  reference.attributes = reference.attributes || {};
  reference.setAttribute = function (key, val) {
    reference.attributes[key] = val;
  };
  reference.getAttribute = function (key) {
    return reference.attributes[key];
  };
  reference.removeAttribute = function (key) {
    delete reference.attributes[key];
  };
  reference.hasAttribute = function (key) {
    return key in reference.attributes;
  };
  reference.addEventListener = function () {};
  reference.removeEventListener = function () {};
  reference.classList = {
    classNames: {},
    add: function add(key) {
      return reference.classList.classNames[key] = true;
    },
    remove: function remove(key) {
      delete reference.classList.classNames[key];
      return true;
    },
    contains: function contains(key) {
      return key in reference.classList.classNames;
    }
  };
}

/**
 * Returns the supported prefixed property - only `webkit` is needed, `moz`, `ms` and `o` are obsolete
 * @param {String} property
 * @return {String} - browser supported prefixed property
 */
function prefix(property) {
  var prefixes = ['', 'webkit'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var _prefix = prefixes[i];
    var prefixedProp = _prefix ? _prefix + upperProp : property;
    if (typeof document.body.style[prefixedProp] !== 'undefined') {
      return prefixedProp;
    }
  }

  return null;
}

/**
 * Creates a div element
 * @return {Element}
 */
function div() {
  return document.createElement('div');
}

/**
 * Creates a popper element then returns it
 * @param {Number} id - the popper id
 * @param {String} title - the tooltip's `title` attribute
 * @param {Object} options - individual options
 * @return {Element} - the popper element
 */
function createPopperElement(id, title, options) {
  var popper = div();
  popper.setAttribute('class', 'tippy-popper');
  popper.setAttribute('role', 'tooltip');
  popper.setAttribute('id', 'tippy-' + id);
  popper.style.zIndex = options.zIndex;
  popper.style.maxWidth = options.maxWidth;

  var tooltip = div();
  tooltip.setAttribute('class', 'tippy-tooltip');
  tooltip.setAttribute('data-size', options.size);
  tooltip.setAttribute('data-animation', options.animation);
  tooltip.setAttribute('data-state', 'hidden');
  options.theme.split(' ').forEach(function (t) {
    tooltip.classList.add(t + '-theme');
  });

  var content = div();
  content.setAttribute('class', 'tippy-content');

  if (options.arrow) {
    var arrow = div();
    arrow.style[prefix('transform')] = options.arrowTransform;

    if (options.arrowType === 'round') {
      arrow.classList.add('tippy-roundarrow');
      arrow.innerHTML = '<svg viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg"><path d="M3 8s2.021-.015 5.253-4.218C9.584 2.051 10.797 1.007 12 1c1.203-.007 2.416 1.035 3.761 2.782C19.012 8.005 21 8 21 8H3z"/></svg>';
    } else {
      arrow.classList.add('tippy-arrow');
    }

    tooltip.appendChild(arrow);
  }

  if (options.animateFill) {
    // Create animateFill circle element for animation
    tooltip.setAttribute('data-animatefill', '');
    var backdrop = div();
    backdrop.classList.add('tippy-backdrop');
    backdrop.setAttribute('data-state', 'hidden');
    tooltip.appendChild(backdrop);
  }

  if (options.inertia) {
    // Change transition timing function cubic bezier
    tooltip.setAttribute('data-inertia', '');
  }

  if (options.interactive) {
    tooltip.setAttribute('data-interactive', '');
  }

  var html = options.html;
  if (html) {
    var templateId = void 0;

    if (html instanceof Element) {
      content.appendChild(html);
      templateId = '#' + (html.id || 'tippy-html-template');
    } else {
      // trick linters: https://github.com/atomiks/tippyjs/issues/197
      content['innerHTML'] = document.querySelector(html)['innerHTML'];
      templateId = html;
    }

    popper.setAttribute('data-html', '');
    tooltip.setAttribute('data-template-id', templateId);

    if (options.interactive) {
      popper.setAttribute('tabindex', '-1');
    }
  } else {
    content[options.allowTitleHTML ? 'innerHTML' : 'textContent'] = title;
  }

  tooltip.appendChild(content);
  popper.appendChild(tooltip);

  return popper;
}

/**
 * Creates a trigger by adding the necessary event listeners to the reference element
 * @param {String} eventType - the custom event specified in the `trigger` setting
 * @param {Element} reference
 * @param {Object} handlers - the handlers for each event
 * @param {Object} options
 * @return {Array} - array of listener objects
 */
function createTrigger(eventType, reference, handlers, options) {
  var onTrigger = handlers.onTrigger,
      onMouseLeave = handlers.onMouseLeave,
      onBlur = handlers.onBlur,
      onDelegateShow = handlers.onDelegateShow,
      onDelegateHide = handlers.onDelegateHide;

  var listeners = [];

  if (eventType === 'manual') return listeners;

  var on = function on(eventType, handler) {
    reference.addEventListener(eventType, handler);
    listeners.push({ event: eventType, handler: handler });
  };

  if (!options.target) {
    on(eventType, onTrigger);

    if (browser.supportsTouch && options.touchHold) {
      on('touchstart', onTrigger);
      on('touchend', onMouseLeave);
    }
    if (eventType === 'mouseenter') {
      on('mouseleave', onMouseLeave);
    }
    if (eventType === 'focus') {
      on(isIE ? 'focusout' : 'blur', onBlur);
    }
  } else {
    if (browser.supportsTouch && options.touchHold) {
      on('touchstart', onDelegateShow);
      on('touchend', onDelegateHide);
    }
    if (eventType === 'mouseenter') {
      on('mouseover', onDelegateShow);
      on('mouseout', onDelegateHide);
    }
    if (eventType === 'focus') {
      on('focusin', onDelegateShow);
      on('focusout', onDelegateHide);
    }
    if (eventType === 'click') {
      on('click', onDelegateShow);
    }
  }

  return listeners;
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Returns an object of settings to override global settings
 * @param {Element} reference
 * @param {Object} instanceOptions
 * @return {Object} - individual options
 */
function getIndividualOptions(reference, instanceOptions) {
  var options = defaultsKeys.reduce(function (acc, key) {
    var val = reference.getAttribute('data-tippy-' + key.toLowerCase()) || instanceOptions[key];

    // Convert strings to booleans
    if (val === 'false') val = false;
    if (val === 'true') val = true;

    // Convert number strings to true numbers
    if (isFinite(val) && !isNaN(parseFloat(val))) {
      val = parseFloat(val);
    }

    // Convert array strings to actual arrays
    if (key !== 'target' && typeof val === 'string' && val.trim().charAt(0) === '[') {
      val = JSON.parse(val);
    }

    acc[key] = val;

    return acc;
  }, {});

  return _extends({}, instanceOptions, options);
}

/**
 * Evaluates/modifies the options object for appropriate behavior
 * @param {Element|Object} reference
 * @param {Object} options
 * @return {Object} modified/evaluated options
 */
function evaluateOptions(reference, options) {
  // animateFill is disabled if an arrow is true
  if (options.arrow) {
    options.animateFill = false;
  }

  if (options.appendTo && typeof options.appendTo === 'function') {
    options.appendTo = options.appendTo();
  }

  if (typeof options.html === 'function') {
    options.html = options.html(reference);
  }

  return options;
}

/**
 * Returns inner elements of the popper element
 * @param {Element} popper
 * @return {Object}
 */
function getInnerElements(popper) {
  var select = function select(s) {
    return popper.querySelector(s);
  };
  return {
    tooltip: select(selectors.TOOLTIP),
    backdrop: select(selectors.BACKDROP),
    content: select(selectors.CONTENT),
    arrow: select(selectors.ARROW) || select(selectors.ROUND_ARROW)
  };
}

/**
 * Removes the title from an element, setting `data-original-title`
 * appropriately
 * @param {Element} el
 */
function removeTitle(el) {
  var title = el.getAttribute('title');
  // Only set `data-original-title` attr if there is a title
  if (title) {
    el.setAttribute('data-original-title', title);
  }
  el.removeAttribute('title');
}

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser$1 = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser$1 && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser$1 && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser$1 && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser$1 && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE$1(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE$1(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE$1(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE$1(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck$1 = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty$1 = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends$1({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE$1(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE$1(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && parent.nodeName === 'HTML') {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE$1()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends$1({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // Avoid blurry text by using full pixel integers.
  // For pixel-perfect positioning, top/bottom prefers rounded
  // values, while left/right prefers floored values.
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.round(popper.top),
    bottom: Math.round(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends$1({}, attributes, data.attributes);
  data.styles = _extends$1({}, styles, data.styles);
  data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$1(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$1(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty$1({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty$1({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends$1({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty$1({}, side, reference[side]),
      end: defineProperty$1({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck$1(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends$1({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends$1({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends$1({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends$1({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass$1(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */

Popper.Utils = (typeof window !== 'undefined' ? window : commonjsGlobal).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/**
 * Triggers document reflow.
 * Use void because some minifiers or engines think simply accessing the property
 * is unnecessary.
 * @param {Element} popper
 */
function reflow(popper) {
  void popper.offsetHeight;
}

/**
 * Wrapper util for popper position updating.
 * Updates the popper's position and invokes the callback on update.
 * Hackish workaround until Popper 2.0's update() becomes sync.
 * @param {Popper} popperInstance
 * @param {Function} callback: to run once popper's position was updated
 * @param {Boolean} updateAlreadyCalled: was scheduleUpdate() already called?
 */
function updatePopperPosition(popperInstance, callback, updateAlreadyCalled) {
  var popper = popperInstance.popper,
      options = popperInstance.options;

  var onCreate = options.onCreate;
  var onUpdate = options.onUpdate;

  options.onCreate = options.onUpdate = function () {
    reflow(popper), callback && callback(), onUpdate();
    options.onCreate = onCreate;
    options.onUpdate = onUpdate;
  };

  if (!updateAlreadyCalled) {
    popperInstance.scheduleUpdate();
  }
}

/**
 * Returns the core placement ('top', 'bottom', 'left', 'right') of a popper
 * @param {Element} popper
 * @return {String}
 */
function getPopperPlacement(popper) {
  return popper.getAttribute('x-placement').replace(/-.+/, '');
}

/**
 * Determines if the mouse's cursor is outside the interactive border
 * @param {MouseEvent} event
 * @param {Element} popper
 * @param {Object} options
 * @return {Boolean}
 */
function cursorIsOutsideInteractiveBorder(event, popper, options) {
  if (!popper.getAttribute('x-placement')) return true;

  var x = event.clientX,
      y = event.clientY;
  var interactiveBorder = options.interactiveBorder,
      distance = options.distance;


  var rect = popper.getBoundingClientRect();
  var placement = getPopperPlacement(popper);
  var borderWithDistance = interactiveBorder + distance;

  var exceeds = {
    top: rect.top - y > interactiveBorder,
    bottom: y - rect.bottom > interactiveBorder,
    left: rect.left - x > interactiveBorder,
    right: x - rect.right > interactiveBorder
  };

  switch (placement) {
    case 'top':
      exceeds.top = rect.top - y > borderWithDistance;
      break;
    case 'bottom':
      exceeds.bottom = y - rect.bottom > borderWithDistance;
      break;
    case 'left':
      exceeds.left = rect.left - x > borderWithDistance;
      break;
    case 'right':
      exceeds.right = x - rect.right > borderWithDistance;
      break;
  }

  return exceeds.top || exceeds.bottom || exceeds.left || exceeds.right;
}

/**
 * Transforms the `arrowTransform` numbers based on the placement axis
 * @param {String} type 'scale' or 'translate'
 * @param {Number[]} numbers
 * @param {Boolean} isVertical
 * @param {Boolean} isReverse
 * @return {String}
 */
function transformNumbersBasedOnPlacementAxis(type, numbers, isVertical, isReverse) {
  if (!numbers.length) return '';

  var transforms = {
    scale: function () {
      if (numbers.length === 1) {
        return '' + numbers[0];
      } else {
        return isVertical ? numbers[0] + ', ' + numbers[1] : numbers[1] + ', ' + numbers[0];
      }
    }(),
    translate: function () {
      if (numbers.length === 1) {
        return isReverse ? -numbers[0] + 'px' : numbers[0] + 'px';
      } else {
        if (isVertical) {
          return isReverse ? numbers[0] + 'px, ' + -numbers[1] + 'px' : numbers[0] + 'px, ' + numbers[1] + 'px';
        } else {
          return isReverse ? -numbers[1] + 'px, ' + numbers[0] + 'px' : numbers[1] + 'px, ' + numbers[0] + 'px';
        }
      }
    }()
  };

  return transforms[type];
}

/**
 * Transforms the `arrowTransform` x or y axis based on the placement axis
 * @param {String} axis 'X', 'Y', ''
 * @param {Boolean} isVertical
 * @return {String}
 */
function transformAxis(axis, isVertical) {
  if (!axis) return '';
  var map = {
    X: 'Y',
    Y: 'X'
  };
  return isVertical ? axis : map[axis];
}

/**
 * Computes and applies the necessary arrow transform
 * @param {Element} popper
 * @param {Element} arrow
 * @param {String} arrowTransform
 */
function computeArrowTransform(popper, arrow, arrowTransform) {
  var placement = getPopperPlacement(popper);
  var isVertical = placement === 'top' || placement === 'bottom';
  var isReverse = placement === 'right' || placement === 'bottom';

  var getAxis = function getAxis(re) {
    var match = arrowTransform.match(re);
    return match ? match[1] : '';
  };

  var getNumbers = function getNumbers(re) {
    var match = arrowTransform.match(re);
    return match ? match[1].split(',').map(parseFloat) : [];
  };

  var re = {
    translate: /translateX?Y?\(([^)]+)\)/,
    scale: /scaleX?Y?\(([^)]+)\)/
  };

  var matches = {
    translate: {
      axis: getAxis(/translate([XY])/),
      numbers: getNumbers(re.translate)
    },
    scale: {
      axis: getAxis(/scale([XY])/),
      numbers: getNumbers(re.scale)
    }
  };

  var computedTransform = arrowTransform.replace(re.translate, 'translate' + transformAxis(matches.translate.axis, isVertical) + '(' + transformNumbersBasedOnPlacementAxis('translate', matches.translate.numbers, isVertical, isReverse) + ')').replace(re.scale, 'scale' + transformAxis(matches.scale.axis, isVertical) + '(' + transformNumbersBasedOnPlacementAxis('scale', matches.scale.numbers, isVertical, isReverse) + ')');

  arrow.style[prefix('transform')] = computedTransform;
}

/**
 * Returns the distance taking into account the default distance due to
 * the transform: translate setting in CSS
 * @param {Number} distance
 * @return {String}
 */
function getOffsetDistanceInPx(distance) {
  return -(distance - defaults.distance) + 'px';
}

/**
 * Waits until next repaint to execute a fn
 * @param {Function} fn
 */
function defer(fn) {
  requestAnimationFrame(function () {
    setTimeout(fn, 1);
  });
}

var matches = {};

if (isBrowser) {
  var e = Element.prototype;
  matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || function (s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s);
    var i = matches.length;
    while (--i >= 0 && matches.item(i) !== this) {} // eslint-disable-line no-empty
    return i > -1;
  };
}

var matches$1 = matches;

/**
 * Ponyfill to get the closest parent element
 * @param {Element} element - child of parent to be returned
 * @param {String} parentSelector - selector to match the parent if found
 * @return {Element}
 */
function closest(element, parentSelector) {
  var fn = Element.prototype.closest || function (selector) {
    var el = this;
    while (el) {
      if (matches$1.call(el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
  };

  return fn.call(element, parentSelector);
}

/**
 * Returns the value taking into account the value being either a number or array
 * @param {Number|Array} value
 * @param {Number} index
 * @return {Number}
 */
function getValue(value, index) {
  return Array.isArray(value) ? value[index] : value;
}

/**
 * Sets the visibility state of an element for transition to begin
 * @param {Element[]} els - array of elements
 * @param {String} type - 'visible' or 'hidden'
 */
function setVisibilityState(els, type) {
  els.forEach(function (el) {
    if (!el) return;
    el.setAttribute('data-state', type);
  });
}

/**
 * Sets the transition property to each element
 * @param {Element[]} els - Array of elements
 * @param {String} value
 */
function applyTransitionDuration(els, value) {
  els.filter(Boolean).forEach(function (el) {
    el.style[prefix('transitionDuration')] = value + 'ms';
  });
}

/**
 * Focuses an element while preventing a scroll jump if it's not entirely within the viewport
 * @param {Element} el
 */
function focus(el) {
  var x = window.scrollX || window.pageXOffset;
  var y = window.scrollY || window.pageYOffset;
  el.focus();
  scroll(x, y);
}

var key = {};
var store = function store(data) {
  return function (k) {
    return k === key && data;
  };
};

var Tippy = function () {
  function Tippy(config) {
    classCallCheck(this, Tippy);

    for (var _key in config) {
      this[_key] = config[_key];
    }

    this.state = {
      destroyed: false,
      visible: false,
      enabled: true
    };

    this._ = store({
      mutationObservers: []
    });
  }

  /**
   * Enables the tooltip to allow it to show or hide
   * @memberof Tippy
   * @public
   */


  createClass(Tippy, [{
    key: 'enable',
    value: function enable() {
      this.state.enabled = true;
    }

    /**
     * Disables the tooltip from showing or hiding, but does not destroy it
     * @memberof Tippy
     * @public
     */

  }, {
    key: 'disable',
    value: function disable() {
      this.state.enabled = false;
    }

    /**
     * Shows the tooltip
     * @param {Number} duration in milliseconds
     * @memberof Tippy
     * @public
     */

  }, {
    key: 'show',
    value: function show(duration) {
      var _this = this;

      if (this.state.destroyed || !this.state.enabled) return;

      var popper = this.popper,
          reference = this.reference,
          options = this.options;

      var _getInnerElements = getInnerElements(popper),
          tooltip = _getInnerElements.tooltip,
          backdrop = _getInnerElements.backdrop,
          content = _getInnerElements.content;

      // If the `dynamicTitle` option is true, the instance is allowed
      // to be created with an empty title. Make sure that the tooltip
      // content is not empty before showing it


      if (options.dynamicTitle && !reference.getAttribute('data-original-title')) return;

      // Do not show tooltip if reference contains 'disabled' attribute. FF fix for #221
      if (reference.hasAttribute('disabled')) return;

      // Destroy tooltip if the reference element is no longer on the DOM
      if (!reference.refObj && !document.documentElement.contains(reference)) {
        this.destroy();
        return;
      }

      options.onShow.call(popper, this);

      duration = getValue(duration !== undefined ? duration : options.duration, 0);

      // Prevent a transition when popper changes position
      applyTransitionDuration([popper, tooltip, backdrop], 0);

      popper.style.visibility = 'visible';
      this.state.visible = true;

      _mount.call(this, function () {
        if (!_this.state.visible) return;

        if (!_hasFollowCursorBehavior.call(_this)) {
          // FIX: Arrow will sometimes not be positioned correctly. Force another update.
          _this.popperInstance.scheduleUpdate();
        }

        // Set initial position near the cursor
        if (_hasFollowCursorBehavior.call(_this)) {
          _this.popperInstance.disableEventListeners();
          var delay = getValue(options.delay, 0);
          var lastTriggerEvent = _this._(key).lastTriggerEvent;
          if (lastTriggerEvent) {
            _this._(key).followCursorListener(delay && _this._(key).lastMouseMoveEvent ? _this._(key).lastMouseMoveEvent : lastTriggerEvent);
          }
        }

        // Re-apply transition durations
        applyTransitionDuration([tooltip, backdrop, backdrop ? content : null], duration);

        if (backdrop) {
          getComputedStyle(backdrop)[prefix('transform')];
        }

        if (options.interactive) {
          reference.classList.add('tippy-active');
        }

        if (options.sticky) {
          _makeSticky.call(_this);
        }

        setVisibilityState([tooltip, backdrop], 'visible');

        _onTransitionEnd.call(_this, duration, function () {
          if (!options.updateDuration) {
            tooltip.classList.add('tippy-notransition');
          }

          if (options.interactive) {
            focus(popper);
          }

          reference.setAttribute('aria-describedby', 'tippy-' + _this.id);

          options.onShown.call(popper, _this);
        });
      });
    }

    /**
     * Hides the tooltip
     * @param {Number} duration in milliseconds
     * @memberof Tippy
     * @public
     */

  }, {
    key: 'hide',
    value: function hide(duration) {
      var _this2 = this;

      if (this.state.destroyed || !this.state.enabled) return;

      var popper = this.popper,
          reference = this.reference,
          options = this.options;

      var _getInnerElements2 = getInnerElements(popper),
          tooltip = _getInnerElements2.tooltip,
          backdrop = _getInnerElements2.backdrop,
          content = _getInnerElements2.content;

      options.onHide.call(popper, this);

      duration = getValue(duration !== undefined ? duration : options.duration, 1);

      if (!options.updateDuration) {
        tooltip.classList.remove('tippy-notransition');
      }

      if (options.interactive) {
        reference.classList.remove('tippy-active');
      }

      popper.style.visibility = 'hidden';
      this.state.visible = false;

      applyTransitionDuration([tooltip, backdrop, backdrop ? content : null], duration);

      setVisibilityState([tooltip, backdrop], 'hidden');

      if (options.interactive && options.trigger.indexOf('click') > -1) {
        focus(reference);
      }

      this.popperInstance.disableEventListeners();

      /*
      * This call is deferred because sometimes when the tooltip is still transitioning in but hide()
      * is called before it finishes, the CSS transition won't reverse quickly enough, meaning
      * the CSS transition will finish 1-2 frames later, and onHidden() will run since the JS set it
      * more quickly. It should actually be onShown(). Seems to be something Chrome does, not Safari
      */
      defer(function () {
        _onTransitionEnd.call(_this2, duration, function () {
          if (_this2.state.visible || !options.appendTo.contains(popper)) return;

          if (!_this2._(key).isPreparingToShow) {
            document.removeEventListener('mousemove', _this2._(key).followCursorListener);
            _this2._(key).lastMouseMoveEvent = null;
          }

          reference.removeAttribute('aria-describedby');

          options.appendTo.removeChild(popper);

          options.onHidden.call(popper, _this2);
        });
      });
    }

    /**
     * Destroys the tooltip instance
     * @param {Boolean} destroyTargetInstances - relevant only when destroying delegates
     * @memberof Tippy
     * @public
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      var destroyTargetInstances = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this.state.destroyed) return;

      // Ensure the popper is hidden
      if (this.state.visible) {
        this.hide(0);
      }

      this.listeners.forEach(function (listener) {
        _this3.reference.removeEventListener(listener.event, listener.handler);
      });

      // Restore title
      if (this.title) {
        this.reference.setAttribute('title', this.title);
      }

      delete this.reference._tippy;

      var attributes = ['data-original-title', 'data-tippy', 'data-tippy-delegate'];
      attributes.forEach(function (attr) {
        _this3.reference.removeAttribute(attr);
      });

      if (this.options.target && destroyTargetInstances) {
        toArray(this.reference.querySelectorAll(this.options.target)).forEach(function (child) {
          return child._tippy && child._tippy.destroy();
        });
      }

      if (this.popperInstance) {
        this.popperInstance.destroy();
      }

      this._(key).mutationObservers.forEach(function (observer) {
        observer.disconnect();
      });

      this.state.destroyed = true;
    }
  }]);
  return Tippy;
}();

/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 * Standalone functions to be called with the instance's `this` context to make
 * them truly private and not accessible on the prototype
 */

/**
 * Determines if the tooltip instance has followCursor behavior
 * @return {Boolean}
 * @memberof Tippy
 * @private
 */
function _hasFollowCursorBehavior() {
  var lastTriggerEvent = this._(key).lastTriggerEvent;
  return this.options.followCursor && !browser.usingTouch && lastTriggerEvent && lastTriggerEvent.type !== 'focus';
}

/**
 * Creates the Tippy instance for the child target of the delegate container
 * @param {Event} event
 * @memberof Tippy
 * @private
 */
function _createDelegateChildTippy(event) {
  var targetEl = closest(event.target, this.options.target);
  if (targetEl && !targetEl._tippy) {
    var title = targetEl.getAttribute('title') || this.title;
    if (title) {
      targetEl.setAttribute('title', title);
      tippy(targetEl, _extends({}, this.options, { target: null }));
      _enter.call(targetEl._tippy, event);
    }
  }
}

/**
 * Method used by event listeners to invoke the show method, taking into account delays and
 * the `wait` option
 * @param {Event} event
 * @memberof Tippy
 * @private
 */
function _enter(event) {
  var _this4 = this;

  var options = this.options;


  _clearDelayTimeouts.call(this);

  if (this.state.visible) return;

  // Is a delegate, create Tippy instance for the child target
  if (options.target) {
    _createDelegateChildTippy.call(this, event);
    return;
  }

  this._(key).isPreparingToShow = true;

  if (options.wait) {
    options.wait.call(this.popper, this.show.bind(this), event);
    return;
  }

  // If the tooltip has a delay, we need to be listening to the mousemove as soon as the trigger
  // event is fired so that it's in the correct position upon mount.
  if (_hasFollowCursorBehavior.call(this)) {
    if (!this._(key).followCursorListener) {
      _setFollowCursorListener.call(this);
    }

    var _getInnerElements3 = getInnerElements(this.popper),
        arrow = _getInnerElements3.arrow;

    if (arrow) arrow.style.margin = '0';
    document.addEventListener('mousemove', this._(key).followCursorListener);
  }

  var delay = getValue(options.delay, 0);

  if (delay) {
    this._(key).showTimeout = setTimeout(function () {
      _this4.show();
    }, delay);
  } else {
    this.show();
  }
}

/**
 * Method used by event listeners to invoke the hide method, taking into account delays
 * @memberof Tippy
 * @private
 */
function _leave() {
  var _this5 = this;

  _clearDelayTimeouts.call(this);

  if (!this.state.visible) return;

  this._(key).isPreparingToShow = false;

  var delay = getValue(this.options.delay, 1);

  if (delay) {
    this._(key).hideTimeout = setTimeout(function () {
      if (_this5.state.visible) {
        _this5.hide();
      }
    }, delay);
  } else {
    this.hide();
  }
}

/**
 * Returns relevant listeners for the instance
 * @return {Object} of listeners
 * @memberof Tippy
 * @private
 */
function _getEventListeners() {
  var _this6 = this;

  var onTrigger = function onTrigger(event) {
    if (!_this6.state.enabled) return;

    var shouldStopEvent = browser.supportsTouch && browser.usingTouch && ['mouseenter', 'mouseover', 'focus'].indexOf(event.type) > -1;

    if (shouldStopEvent && _this6.options.touchHold) return;

    _this6._(key).lastTriggerEvent = event;

    // Toggle show/hide when clicking click-triggered tooltips
    if (event.type === 'click' && _this6.options.hideOnClick !== 'persistent' && _this6.state.visible) {
      _leave.call(_this6);
    } else {
      _enter.call(_this6, event);
    }

    // iOS prevents click events from firing
    if (shouldStopEvent && browser.iOS && _this6.reference.click) {
      _this6.reference.click();
    }
  };

  var onMouseLeave = function onMouseLeave(event) {
    if (['mouseleave', 'mouseout'].indexOf(event.type) > -1 && browser.supportsTouch && browser.usingTouch && _this6.options.touchHold) return;

    if (_this6.options.interactive) {
      var hide = _leave.bind(_this6);

      var onMouseMove = function onMouseMove(event) {
        var referenceCursorIsOver = closest(event.target, selectors.REFERENCE);
        var cursorIsOverPopper = closest(event.target, selectors.POPPER) === _this6.popper;
        var cursorIsOverReference = referenceCursorIsOver === _this6.reference;

        if (cursorIsOverPopper || cursorIsOverReference) return;

        if (cursorIsOutsideInteractiveBorder(event, _this6.popper, _this6.options)) {
          document.body.removeEventListener('mouseleave', hide);
          document.removeEventListener('mousemove', onMouseMove);

          _leave.call(_this6, onMouseMove);
        }
      };

      document.body.addEventListener('mouseleave', hide);
      document.addEventListener('mousemove', onMouseMove);
      return;
    }

    _leave.call(_this6);
  };

  var onBlur = function onBlur(event) {
    if (event.target !== _this6.reference || browser.usingTouch) return;

    if (_this6.options.interactive) {
      if (!event.relatedTarget) return;
      if (closest(event.relatedTarget, selectors.POPPER)) return;
    }

    _leave.call(_this6);
  };

  var onDelegateShow = function onDelegateShow(event) {
    if (closest(event.target, _this6.options.target)) {
      _enter.call(_this6, event);
    }
  };

  var onDelegateHide = function onDelegateHide(event) {
    if (closest(event.target, _this6.options.target)) {
      _leave.call(_this6);
    }
  };

  return {
    onTrigger: onTrigger,
    onMouseLeave: onMouseLeave,
    onBlur: onBlur,
    onDelegateShow: onDelegateShow,
    onDelegateHide: onDelegateHide
  };
}

/**
 * Creates and returns a new popper instance
 * @return {Popper}
 * @memberof Tippy
 * @private
 */
function _createPopperInstance() {
  var _this7 = this;

  var popper = this.popper,
      reference = this.reference,
      options = this.options;

  var _getInnerElements4 = getInnerElements(popper),
      tooltip = _getInnerElements4.tooltip;

  var popperOptions = options.popperOptions;

  var arrowSelector = options.arrowType === 'round' ? selectors.ROUND_ARROW : selectors.ARROW;
  var arrow = tooltip.querySelector(arrowSelector);

  var config = _extends({
    placement: options.placement
  }, popperOptions || {}, {
    modifiers: _extends({}, popperOptions ? popperOptions.modifiers : {}, {
      arrow: _extends({
        element: arrowSelector
      }, popperOptions && popperOptions.modifiers ? popperOptions.modifiers.arrow : {}),
      flip: _extends({
        enabled: options.flip,
        padding: options.distance + 5 /* 5px from viewport boundary */
        , behavior: options.flipBehavior
      }, popperOptions && popperOptions.modifiers ? popperOptions.modifiers.flip : {}),
      offset: _extends({
        offset: options.offset
      }, popperOptions && popperOptions.modifiers ? popperOptions.modifiers.offset : {})
    }),
    onCreate: function onCreate() {
      tooltip.style[getPopperPlacement(popper)] = getOffsetDistanceInPx(options.distance);

      if (arrow && options.arrowTransform) {
        computeArrowTransform(popper, arrow, options.arrowTransform);
      }
    },
    onUpdate: function onUpdate() {
      var styles = tooltip.style;
      styles.top = '';
      styles.bottom = '';
      styles.left = '';
      styles.right = '';
      styles[getPopperPlacement(popper)] = getOffsetDistanceInPx(options.distance);

      if (arrow && options.arrowTransform) {
        computeArrowTransform(popper, arrow, options.arrowTransform);
      }
    }
  });

  _addMutationObserver.call(this, {
    target: popper,
    callback: function callback() {
      _this7.popperInstance.update();
    },
    options: {
      childList: true,
      subtree: true,
      characterData: true
    }
  });

  return new Popper(reference, popper, config);
}

/**
 * Appends the popper element to the DOM, updating or creating the popper instance
 * @param {Function} callback
 * @memberof Tippy
 * @private
 */
function _mount(callback) {
  var options = this.options;


  if (!this.popperInstance) {
    this.popperInstance = _createPopperInstance.call(this);
    if (!options.livePlacement) {
      this.popperInstance.disableEventListeners();
    }
  } else {
    this.popperInstance.scheduleUpdate();
    if (options.livePlacement && !_hasFollowCursorBehavior.call(this)) {
      this.popperInstance.enableEventListeners();
    }
  }

  // If the instance previously had followCursor behavior, it will be positioned incorrectly
  // if triggered by `focus` afterwards - update the reference back to the real DOM element
  if (!_hasFollowCursorBehavior.call(this)) {
    var _getInnerElements5 = getInnerElements(this.popper),
        arrow = _getInnerElements5.arrow;

    if (arrow) arrow.style.margin = '';
    this.popperInstance.reference = this.reference;
  }

  updatePopperPosition(this.popperInstance, callback, true);

  if (!options.appendTo.contains(this.popper)) {
    options.appendTo.appendChild(this.popper);
  }
}

/**
 * Clears the show and hide delay timeouts
 * @memberof Tippy
 * @private
 */
function _clearDelayTimeouts() {
  var _ref = this._(key),
      showTimeout = _ref.showTimeout,
      hideTimeout = _ref.hideTimeout;

  clearTimeout(showTimeout);
  clearTimeout(hideTimeout);
}

/**
 * Sets the mousemove event listener function for `followCursor` option
 * @memberof Tippy
 * @private
 */
function _setFollowCursorListener() {
  var _this8 = this;

  this._(key).followCursorListener = function (event) {
    var _$lastMouseMoveEvent = _this8._(key).lastMouseMoveEvent = event,
        clientX = _$lastMouseMoveEvent.clientX,
        clientY = _$lastMouseMoveEvent.clientY;

    if (!_this8.popperInstance) return;

    _this8.popperInstance.reference = {
      getBoundingClientRect: function getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          top: clientY,
          left: clientX,
          right: clientX,
          bottom: clientY
        };
      },
      clientWidth: 0,
      clientHeight: 0
    };

    _this8.popperInstance.scheduleUpdate();
  };
}

/**
 * Updates the popper's position on each animation frame
 * @memberof Tippy
 * @private
 */
function _makeSticky() {
  var _this9 = this;

  var applyTransitionDuration$$1 = function applyTransitionDuration$$1() {
    _this9.popper.style[prefix('transitionDuration')] = _this9.options.updateDuration + 'ms';
  };

  var removeTransitionDuration = function removeTransitionDuration() {
    _this9.popper.style[prefix('transitionDuration')] = '';
  };

  var updatePosition = function updatePosition() {
    if (_this9.popperInstance) {
      _this9.popperInstance.update();
    }

    applyTransitionDuration$$1();

    if (_this9.state.visible) {
      requestAnimationFrame(updatePosition);
    } else {
      removeTransitionDuration();
    }
  };

  updatePosition();
}

/**
 * Adds a mutation observer to an element and stores it in the instance
 * @param {Object}
 * @memberof Tippy
 * @private
 */
function _addMutationObserver(_ref2) {
  var target = _ref2.target,
      callback = _ref2.callback,
      options = _ref2.options;

  if (!window.MutationObserver) return;

  var observer = new MutationObserver(callback);
  observer.observe(target, options);

  this._(key).mutationObservers.push(observer);
}

/**
 * Fires the callback functions once the CSS transition ends for `show` and `hide` methods
 * @param {Number} duration
 * @param {Function} callback - callback function to fire once transition completes
 * @memberof Tippy
 * @private
 */
function _onTransitionEnd(duration, callback) {
  // Make callback synchronous if duration is 0
  if (!duration) {
    return callback();
  }

  var _getInnerElements6 = getInnerElements(this.popper),
      tooltip = _getInnerElements6.tooltip;

  var toggleListeners = function toggleListeners(action, listener) {
    if (!listener) return;
    tooltip[action + 'EventListener']('ontransitionend' in window ? 'transitionend' : 'webkitTransitionEnd', listener);
  };

  var listener = function listener(e) {
    if (e.target === tooltip) {
      toggleListeners('remove', listener);
      callback();
    }
  };

  toggleListeners('remove', this._(key).transitionendListener);
  toggleListeners('add', listener);

  this._(key).transitionendListener = listener;
}

var idCounter = 1;

/**
 * Creates tooltips for each reference element
 * @param {Element[]} els
 * @param {Object} config
 * @return {Tippy[]} Array of Tippy instances
 */
function createTooltips(els, config) {
  return els.reduce(function (acc, reference) {
    var id = idCounter;

    var options = evaluateOptions(reference, config.performance ? config : getIndividualOptions(reference, config));

    var title = reference.getAttribute('title');

    // Don't create an instance when:
    // * the `title` attribute is falsy (null or empty string), and
    // * it's not a delegate for tooltips, and
    // * there is no html template specified, and
    // * `dynamicTitle` option is false
    if (!title && !options.target && !options.html && !options.dynamicTitle) {
      return acc;
    }

    // Delegates should be highlighted as different
    reference.setAttribute(options.target ? 'data-tippy-delegate' : 'data-tippy', '');

    removeTitle(reference);

    var popper = createPopperElement(id, title, options);

    var tippy = new Tippy({
      id: id,
      reference: reference,
      popper: popper,
      options: options,
      title: title,
      popperInstance: null
    });

    if (options.createPopperInstanceOnInit) {
      tippy.popperInstance = _createPopperInstance.call(tippy);
      tippy.popperInstance.disableEventListeners();
    }

    var listeners = _getEventListeners.call(tippy);
    tippy.listeners = options.trigger.trim().split(' ').reduce(function (acc, eventType) {
      return acc.concat(createTrigger(eventType, reference, listeners, options));
    }, []);

    // Update tooltip content whenever the title attribute on the reference changes
    if (options.dynamicTitle) {
      _addMutationObserver.call(tippy, {
        target: reference,
        callback: function callback() {
          var _getInnerElements = getInnerElements(popper),
              content = _getInnerElements.content;

          var title = reference.getAttribute('title');
          if (title) {
            content[options.allowTitleHTML ? 'innerHTML' : 'textContent'] = tippy.title = title;
            removeTitle(reference);
          }
        },

        options: {
          attributes: true
        }
      });
    }

    // Shortcuts
    reference._tippy = tippy;
    popper._tippy = tippy;
    popper._reference = reference;

    acc.push(tippy);

    idCounter++;

    return acc;
  }, []);
}

/**
 * Hides all poppers
 * @param {Tippy} excludeTippy - tippy to exclude if needed
 */
function hideAllPoppers(excludeTippy) {
  var poppers = toArray(document.querySelectorAll(selectors.POPPER));

  poppers.forEach(function (popper) {
    var tippy = popper._tippy;
    if (!tippy) return;

    var options = tippy.options;


    if ((options.hideOnClick === true || options.trigger.indexOf('focus') > -1) && (!excludeTippy || popper !== excludeTippy.popper)) {
      tippy.hide();
    }
  });
}

/**
 * Adds the needed event listeners
 */
function bindEventListeners() {
  var onDocumentTouch = function onDocumentTouch() {
    if (browser.usingTouch) return;

    browser.usingTouch = true;

    if (browser.iOS) {
      document.body.classList.add('tippy-touch');
    }

    if (browser.dynamicInputDetection && window.performance) {
      document.addEventListener('mousemove', onDocumentMouseMove);
    }

    browser.onUserInputChange('touch');
  };

  var onDocumentMouseMove = function () {
    var time = void 0;

    return function () {
      var now = performance.now();

      // Chrome 60+ is 1 mousemove per animation frame, use 20ms time difference
      if (now - time < 20) {
        browser.usingTouch = false;
        document.removeEventListener('mousemove', onDocumentMouseMove);
        if (!browser.iOS) {
          document.body.classList.remove('tippy-touch');
        }
        browser.onUserInputChange('mouse');
      }

      time = now;
    };
  }();

  var onDocumentClick = function onDocumentClick(event) {
    // Simulated events dispatched on the document
    if (!(event.target instanceof Element)) {
      return hideAllPoppers();
    }

    var reference = closest(event.target, selectors.REFERENCE);
    var popper = closest(event.target, selectors.POPPER);

    if (popper && popper._tippy && popper._tippy.options.interactive) {
      return;
    }

    if (reference && reference._tippy) {
      var options = reference._tippy.options;

      var isClickTrigger = options.trigger.indexOf('click') > -1;
      var isMultiple = options.multiple;

      // Hide all poppers except the one belonging to the element that was clicked
      if (!isMultiple && browser.usingTouch || !isMultiple && isClickTrigger) {
        return hideAllPoppers(reference._tippy);
      }

      if (options.hideOnClick !== true || isClickTrigger) {
        return;
      }
    }

    hideAllPoppers();
  };

  var onWindowBlur = function onWindowBlur() {
    var _document = document,
        el = _document.activeElement;

    if (el && el.blur && matches$1.call(el, selectors.REFERENCE)) {
      el.blur();
    }
  };

  var onWindowResize = function onWindowResize() {
    toArray(document.querySelectorAll(selectors.POPPER)).forEach(function (popper) {
      var tippyInstance = popper._tippy;
      if (tippyInstance && !tippyInstance.options.livePlacement) {
        tippyInstance.popperInstance.scheduleUpdate();
      }
    });
  };

  document.addEventListener('click', onDocumentClick);
  document.addEventListener('touchstart', onDocumentTouch);
  window.addEventListener('blur', onWindowBlur);
  window.addEventListener('resize', onWindowResize);

  if (!browser.supportsTouch && (navigator.maxTouchPoints || navigator.msMaxTouchPoints)) {
    document.addEventListener('pointerdown', onDocumentTouch);
  }
}

var eventListenersBound = false;

/**
 * Exported module
 * @param {String|Element|Element[]|NodeList|Object} selector
 * @param {Object} options
 * @param {Boolean} one - create one tooltip
 * @return {Object}
 */
function tippy(selector, options, one) {
  if (browser.supported && !eventListenersBound) {
    bindEventListeners();
    eventListenersBound = true;
  }

  if (isObjectLiteral(selector)) {
    polyfillVirtualReferenceProps(selector);
  }

  options = _extends({}, defaults, options);

  var references = getArrayOfElements(selector);
  var firstReference = references[0];

  return {
    selector: selector,
    options: options,
    tooltips: browser.supported ? createTooltips(one && firstReference ? [firstReference] : references, options) : [],
    destroyAll: function destroyAll() {
      this.tooltips.forEach(function (tooltip) {
        return tooltip.destroy();
      });
      this.tooltips = [];
    }
  };
}

tippy.version = version;
tippy.browser = browser;
tippy.defaults = defaults;
tippy.one = function (selector, options) {
  return tippy(selector, options, true).tooltips[0];
};
tippy.disableAnimations = function () {
  defaults.updateDuration = defaults.duration = 0;
  defaults.animateFill = false;
};

/**
 * Injects CSS styles to document head
 * @param {String} css
 */
function injectCSS() {
  var css = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (isBrowser && browser.supported) {
    var head = document.head || document.querySelector('head');
    var style = document.createElement('style');
    style.type = 'text/css';
    head.insertBefore(style, head.firstChild);

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }
}

injectCSS(styles);

return tippy;

})));
});

class YooTooltipComponent {
    constructor() {
        this.tippy = null;
    }
    onOptionsChange() {
        this.loadTippy();
    }
    onTextChange() {
        this.loadTippy();
    }
    componentWillLoad() {
        this.loadTippy();
    }
    loadTippy() {
        // Title is not an option in the API; set it directly as an attribute
        this.host.setAttribute('title', this.text);
        let tippyOptions = Object.assign({}, this.options, { theme: 'light', placement: this.placement, arrow: true, arrowType: 'round', createPopperInstanceOnInit: false });
        if (this.tippy) {
            this.tippy.destroyAll();
        }
        // Moved tooltip to always be on the host element
        this.tippy = tippy_all(this.host, tippyOptions);
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "yoo-tooltip"; }
    static get encapsulation() { return "scoped"; }
    static get properties() { return { "host": { "elementRef": true }, "options": { "type": "Any", "attr": "options", "watchCallbacks": ["onOptionsChange"] }, "placement": { "type": String, "attr": "placement" }, "text": { "type": String, "attr": "text", "watchCallbacks": ["onTextChange"] } }; }
}

export { YooFormInputComponent as YooFormInput, YooTooltipComponent as YooTooltip };