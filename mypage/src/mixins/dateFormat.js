export const dateFormat = {
    data() {
        return {
            mixinData: "믹스인!!"
        }
    },
    methods: {
        getDateTime(date){
            if(date !== null){
                let hour= date.getHours()
                let minutes = date.getMinutes()
                let fullDate = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
                return `${fullDate} ${hour}시 ${minutes}분 `
            }
            else {
                return null
            }
        }
    }
}