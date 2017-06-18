
class FakeAPIClass {

    getNumber(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Math.random())
            }, 1000);
        })
    }
}

export let FakeAPI = new FakeAPIClass();