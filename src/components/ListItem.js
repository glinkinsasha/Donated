import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.id = this.state.id;
    this.$rootElement.dataset.amount = this.state.amount;

    const inString = function(num) {
      let str = String(num);
      if(str.length == 1) {
        str = '0' + str;
      }
      return str;
    }

    this.Day = inString(this.state.date.getDate());
    this.Month = inString(this.state.date.getMonth() + 1);
    this.Year = inString(this.state.date.getFullYear());
    this.Hours = inString(this.state.date.getHours());
    this.Minutes = inString(this.state.date.getMinutes());
    this.Seconds = inString(this.state.date.getSeconds());
    this.$rootElement.innerHTML = `${this.Day}/${this.Month}/${this.Year}, ${this.Hours}:${this.Minutes}:${this.Seconds} - $<b>${this.state.amount}</b>`;

    this.$button = document.createElement('button');
    this.$button.className = 'delete-button';
    this.$button.textContent = 'Удалить'
    this.$rootElement.appendChild(this.$button);
  }
}
