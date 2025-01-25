import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: 0,
    }
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const label = document.createElement('ladel');
    label.className = 'donate-form__input-label';
    label.textContent = 'Введите сумму в $';

    this.$input = document.createElement('input');
		this.$input.className = 'donate-form__donate-input';
    this.$input.name = 'amount';
    this.$input.type = 'number';
    this.$input.max = 100;
    this.$input.min = 1;
    this.$input.required = true;
    label.appendChild(this.$input);

    this.$rootElement.appendChild(label);

    this.$button = document.createElement('button');
		this.$button.className = 'donate-form__submit-button';
		this.$button.type = 'submit';
		this.$button.textContent = 'Задонатить';
    this.$rootElement.appendChild(this.$button);
    this.$button.disabled = true;

    this.$input.addEventListener('input', this.handleInput.bind(this));
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));

  }

  handleInput(event) {
    this.state.amount = Number(event.target.value);
    this.isValid ? this.$button.disabled = false : this.$button.disabled = true;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.amount);
    this.$input.value = '';
  }

  get isValid() {
    if(this.state.amount >= 1 && this.state.amount <= 100 && Number.isInteger(this.state.amount)) {
      return true;
    } else {
      return false;
    }
  }
}
