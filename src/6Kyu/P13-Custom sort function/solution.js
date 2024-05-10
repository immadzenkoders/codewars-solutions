/*
Complete the sort function so that it returns the items passed into it in alphanumerical order. Conveniently enough, the standard array sort method has been disabled for you so that you are forced to create your own.

Example:

[1,3,2]  =>  [1,2,3]
*/

function sort(items) {
    for (let i = 1; i < items.length; i++) {
        let current = items[i];
        let j = i - 1;

        while (j >= 0 && items[j] > current) {
            items[j + 1] = items[j];
            j--;
        }

        items[j + 1] = current;
    }

    return items;
}
