import {getHeroeById} from './imports-and-arrowf'

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroeById(id)
            if(!hero) return reject(`No existe heroe con id ${id}`);
            resolve(hero);
        }, 2000);
    });
}

getHeroeByIdAsync(5).then((hero) => {
    console.log(hero);
}).catch((err) => {
    console.log('¡Upss!, Hay un error: ', err);
}).finally(() => {
    console.log('Concluyo la promesa.');
});