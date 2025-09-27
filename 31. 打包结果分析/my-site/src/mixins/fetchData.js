// 公共的远程获取数据的代码
// 具体的组件中，需要提供一个远程获取数据的方法  fetchData
/*export default {
    data() {
        return {
            isLoading: true,
            data: null,
        }
    },
    async created() {
        this.data = await this.fetchData();
        this.isLoading = false;
    },
}*/

// data: null,可能是不同类型的数据，所以需要传递一个参数
export default function (defaultDataValue = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: defaultDataValue,
            }
        },
        async created() {
            this.data = await this.fetchData();
            this.isLoading = false;
        },
    }
}