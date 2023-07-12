//3ero. actúa como el adaptador y adapta la interfaz del Adaptee a la del Target
class Adapter {
    constructor(adaptee) {
        this.adaptee = adaptee;
    }
    request() {
        return this.adaptee.specificRequest() + ' - Adapter';
    }
}

export default Adapter;