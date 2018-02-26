const store = (function () {
    const items = [
        { id: cuid(), name: 'apples', checked: false },
        { id: cuid(), name: 'oranges', checked: false },
        { id: cuid(), name: 'milk', checked: true },
        { id: cuid(), name: 'bread', checked: false }
      ];
      
    const hideCheckedItems = false;
    const searchTerm = '';

    const findById = (function(id) {
        const item = store.items.find(function(findId) {
            return findId.id === id;
        })
        return item;
    });

    const addItem = (function(name) {
        try {
            Item.validateName(name);
            const item = Item.create(name);
            this.items.push(item);
        } catch(e) {
            console.log(`${e.message}`)
        }
    });
    
    const findAndToggleChecked = (function(id) {
        const item = findById(id);
        if (item.checked === false) {
            item.checked = true;
        } else {
            item.checked = false;
        }
    });
    
    const findAndUpdateName = (function(id, newName) {
        try {
            Item.validateName(newName);
            const item = findById(id);
            item.name = newName;
        } catch(e) {
            console.log(`${e.message}`);
        }
    });
    
    const findAndDelete = (function(id) {
        store.items = store.items.filter(function(item) {
            return item.id !== id;
        });
    });

    const toggleCheckedFilter = (function() {
        if (this.hideCheckedItems) {
            this.hideCheckedItems = false;
        } else {
            this.hideCheckedItems = true;
        }
    });

    const setSearchTerm = (function(searchTerm) {
        this.searchTerm = searchTerm;
    });

      return {
          items, hideCheckedItems, addItem, searchTerm, findAndToggleChecked, findAndUpdateName, findAndDelete, toggleCheckedFilter, setSearchTerm
      }

}() );
