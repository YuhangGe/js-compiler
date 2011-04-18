/**
 * @author Abraham
 */
String.prototype.trim = function(){
    return this.replace(/(^\s*)|(\s*$)/g, "");
}


function get$(id){
    return document.getElementById(id);
}

Debug={
	print:function(msg){
		if(typeof console !=='undefined')
			console.log(msg);
		else
			alert(msg);
	}
}
/*================面向对象==================*/

/**
 *
 * @param {Object} baseType
 * @param {Array} args
 */
Object.prototype.initializeBase = function(baseType, args){
    if (!(args instanceof Array) || args.length !== 0) {
        baseType.apply(this, args);
    }
    else {
        baseType.call(this);
    }
}




function makeInherits(inheritType, baseType){
    for (var pFunc in baseType.prototype) {
        var sp = inheritType.prototype[pFunc];
        if (typeof sp === 'undefined') {
            inheritType.prototype[pFunc] = baseType.prototype[pFunc];
        }
    }
    /**
     *
     * @param {Object} instance
     * @param {string} method
     * @param {Array} args
     */
    inheritType.callBaseMethod = function(instance, method, args){
        var med = baseType.prototype[method];
        if (typeof med === 'function') {
            if (!(args instanceof Array) || args.length === 0) 
                med.call(instance);
            else 
                med.apply(instance, args);
        }
    }
}

/*================面向对象==================*/


/*================数组=====================*/
/***
 * clear all elements of this array, make this array empty
 */
Array.prototype.clear = function(){
    var len = this.length;
    for (var i = 0; i < len; i++) 
        this.pop();
}

if (typeof Array.prototype.indexOf === 'undefined') {
    /***
     *
     * @param {Object} value
     * @return {Number}
     */
    Array.prototype.indexOf = function(value){
        for (var i = 0; i < this.length; i++) 
            if (this[i] === value) 
                return i;
        return -1;
    }
}


Array.prototype.removeAt = function(index){
    if (typeof index !== 'number' || index >= this.length || index < 0) 
        return false;
    this.splice(index, 1);
    return true;
}
/*=====================数组================*/