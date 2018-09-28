
export const core = {
    addAuthExpiration: function(date, days) {
        let expirationDate = new Date(date.getTime() + days*24*60*60*1000);
        return Number(expirationDate);
    }
};