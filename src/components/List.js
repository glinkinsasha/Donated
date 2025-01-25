import { Component } from '../core/Component';
import { ListItem } from './ListItem';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    this.$header = document.createElement('h2');
    this.$header.className = 'donates-container__title';
    this.$header.textContent = 'Список донатов';

    this.$listcontainer = document.createElement('div');
    this.$listcontainer.className = 'donates-container__donates';

    this.$rootElement.appendChild(this.$header);
    this.$rootElement.appendChild(this.$listcontainer);

    this.$listcontainer.addEventListener('click', this.delete.bind(this));
  }

  addItem(item) {
    this.$listcontainer.appendChild(item);
  }

  delete(event) {
    if(event.target.className == 'delete-button') {
      this.props.onDelete(event.target.parentElement)
    }
  }
}