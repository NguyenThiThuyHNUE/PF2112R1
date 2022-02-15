class Remote {
    constructor(id,tv) {
        this.id = id;
        this.tv = tv;
    }

    setChannel(channel) {
        this.tv.channel = channel;
    }

    setVolume(volume) {
        this.tv.volume = volume;
    }
}

class Tivi {

    status;
    constructor(channel, volume) {
        this.channel = channel;
        this.volume = volume;
    }

    getStatus() {
        if (this.status) {
            alert("Tivi đang bật")
        } else {
            alert("Tivi đang tắt")
        }
    }

    turnOn() {
        return this.status = true;
    }

    turnOff() {
        return this.status = false;
    }

    getChannelTV() {
        return this.channel;
    }

    getVolumeTV() {
        return this.volume;
    }

    setChannelTV(new_channel) {
        this.channel = new_channel;
    }

    setVolumeTV(new_volume) {
        this.volume = new_volume;
    }
}


let Sony = new Tivi(2, 10);
let remote1 = new Remote(1, Sony);

Sony.turnOn();
Sony.getStatus();
Sony.setChannelTV(7);
console.log(Sony.getChannelTV());

remote1.setChannel(3);
remote1.setVolume(12);
console.log(Sony.getChannelTV());
console.log(Sony.getVolumeTV());