import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    this.$header = document.createElement('h1');
    this.$header.className = 'total-amount';
    this.$header.innerHTML = `Итого: $<span>${this.state.total}</span>`;
    this.$rootElement.appendChild(this.$header);
    
    const donateForm = new Form({onSubmit: this.onItemCreate.bind(this)});
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List({onDelete: this.onItemDelete.bind(this)});
    this.donateList = donateList;
    this.$rootElement.appendChild(donateList.$rootElement);
  }
  
  onItemCreate(amount) {
    const item = new ListItem({amount: amount}).$rootElement;
    this.state.donates.push(item);
    this.donateList.addItem(item);
    this.state.total += +amount;
    this.$header.innerHTML = `Итого: $<span>${this.state.total}</span>`;
  }

  onItemDelete(item) {
    for(let i = 0; i < this.state.donates.length; i++) {
      if( this.state.donates[i].id === item.id ) {
        this.state.total -= this.state.donates[i].dataset.amount;
        this.state.donates.splice(i, 1);
      }
    }
    item.remove();
    this.$header.innerHTML = `Итого: $<span>${this.state.total}</span>`;
  }
}
