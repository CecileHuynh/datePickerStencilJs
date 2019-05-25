import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop() min: string;
  @Prop() max: string;

  getNowDate() {
    let today = new Date().toISOString().substr(0, 10);
    return today;
  }
  render() {
    return (<div>
      <input class="dateCustom" min={this.min} max={this.max} type="date" value={this.getNowDate()}></input>
    </div>
    );
  }
}
