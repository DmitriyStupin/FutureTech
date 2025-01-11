class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent ) {
      throw new Error('Невозможно создать экземпляр абстрактного класс BaseComponent!')
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop]
      },
      set: (target, prop, newValue) => {
        const oldValue = target[prop]

        target[prop] = newValue
       
        if (newValue !== oldValue) {
          this.updateUI()
        }
        return true
      },
    })
  }

  updateUI() {
    throw new Error('Необходимо реализовать медот updateUI!')
  }
}

export default BaseComponent;