import { Component, Prop, Event, EventEmitter, Element } from '@stencil/core';
import '@ionic/core';
@Component({
    tag: 'yoo-button',
    styleUrl: 'button.scss',
    scoped: true
})
export class YooButtonComponent {

    @Prop() text: string;
    @Prop() disabled = false;
    @Prop() isLoading: boolean;
    @Prop() icon: string;

    @Event() buttonClicked: EventEmitter<boolean>;

    @Element() host: HTMLElement;

    click() {
        if (!this.disabled) {
            this.buttonClicked.emit(true);
        }
    }

    renderButtonContent(): JSX.Element {
        return (
            <div class="value">
                {this.text}
                {this.icon ? <span class="icon"><i class={this.icon}></i></span> : null}
                <slot></slot>
            </div>
        );
    }

    render(): JSX.Element {
        return (
            [
                <button class={'container ' + (this.disabled ? 'disabled' : '')} disabled={this.disabled} onClick={() => this.click()}>
                    {this.renderButtonContent()}
                </button>,
                <ion-content>
                    <ion-item-sliding>
                        <ion-item>
                            <div> Sliding Item</div>
                        </ion-item>
                        <ion-item-options>
                            <button ion-button>
                                <i class='heart'></i>
                                <span>Test</span>
                            </button>
                        </ion-item-options>
                    </ion-item-sliding>
                </ion-content>

            ]
        );
    }

}
