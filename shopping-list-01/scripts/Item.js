const Item = (function() {
    return {
        validateName, create
    };
}() );

const validateName = (function(name) {
    if (name === '') {
        throw new TypeError ('name does not exist.');
    }
    return name;
})

const create = (function(name) {
    const id = cuid();
    const checked = false;
    return {
        id, name, checked
    };
})