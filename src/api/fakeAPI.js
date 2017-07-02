
class FakeAPIClass {

    getNumber(offset){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Math.random() + offset)
            }, 1000);
        })
    }
}

export let FakeAPI = new FakeAPIClass();