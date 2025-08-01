//make a object with two arrays, one for BE and one for FE developers

let devloperarray = [
    {
        first: 'parvesh',
        last: 'kumar',
        dept: 'FE',
        commits: 10
    },
    {
        first: 'ashutosh',
        last: 'diwedi',
        dept: 'BE',
        commits: 10
    },
    {
        first: 'sweta',
        last: 'sharma',
        dept: 'BE',
        commits: 20
    },
    {
        first: 'parul',
        last: 'sharma',
        dept: 'FE',
        commits: 8
    }
    ];

let reduced_array = devloperarray.reduce(
    function(accu,current){
        if(current.dept==='BE'){
            accu.BE.push(current.first)
        }else{
            accu.FE.push(current.first)
        }
        return accu;
    },
    {BE: [] , FE: []}
);
console.log(reduced_array);


//count the total commits

let devloperarray = [
    {
        first: 'parvesh',
        last: 'kumar',
        dept: 'FE',
        commits: 10
    },
    {
        first: 'ashutosh',
        last: 'diwedi',
        dept: 'BE',
        commits: 10
    },
    {
        first: 'Rashmi',
        last: 'diwedi',
        dept: 'BE',
        commits: 20
    },
    {
        first: 'parul',
        last: 'sharma',
        dept: 'FE',
        commits: 8
    }
    ];

let reduce = devloperarray.reduce(
    function (accu , current){
       let total_commits = current.commits+accu;
        return total_commits
    },0)

console.log(reduce)

// concatinate all the first names and last names of developers


let devloperarray = [
    {
        first: 'parvesh',
        last: 'kumar',
        dept: 'FE',
        commits: 10
    },
    {
        first: 'ashutosh',
        last: 'diwedi',
        dept: 'BE',
        commits: 10
    },
    {
        first: 'Rashmi',
        last: 'diwedi',
        dept: 'BE',
        commits: 20
    },
    {
        first: 'parul',
        last: 'sharma',
        dept: 'FE',
        commits: 8
    }
    ];

let mapped = devloperarray.map((item)=>{
    return `${item.first} ${item.last}`;
});

console.log(mapped);

// filter the developers who have in BE department

let devloperarray = [
    {
        first: 'parvesh',
        last: 'kumar',
        dept: 'FE',
        commits: 10
    },
    {
        first: 'ashutosh',
        last: 'diwedi',
        dept: 'BE',
        commits: 10
    },
    {
        first: 'Rashmi',
        last: 'diwedi',
        dept: 'BE',
        commits: 20
    },
    {
        first: 'parul',
        last: 'sharma',
        dept: 'FE',
        commits: 8
    }
    ];

let filtered_arr = devloperarray.filter((item)=>{
    return item.dept==='BE';
});
console.log(filtered_arr);