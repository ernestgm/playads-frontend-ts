import {filter} from "lodash";

// a, b, orderBy
function descendingComparator(_a: { [x: string]: number; }, _b: { [x: string]: number; }, _orderBy: string | number) {
    if (_b[_orderBy] < _a[_orderBy]) {
        return -1;
    }
    if (_b[_orderBy] > _a[_orderBy]) {
        return 1;
    }
    return 0;
}

// order, orderBy
export function getComparator(props: { _order: any; _orderBy: any; }) {
    const {_order, _orderBy} = props
    return _order === 'desc'
        ? (a: { [x: string]: number; }, b: { [x: string]: number; }) => descendingComparator(a, b, _orderBy)
        : (a: { [x: string]: number; }, b: { [x: string]: number; }) => -descendingComparator(a, b, _orderBy);
}

export function applySortFilter(props: { array: any; comparator: any; query: any; }) {
    const {array, comparator, query} = props;
    let stabilizedThis = [];
    if (array !== undefined) {
        stabilizedThis = array.map((el: any, index: any) => [el, index]);
    }

    stabilizedThis.sort((a: number[], b: number[]) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        return array.filter((item: { [s: string]: unknown; } | ArrayLike<unknown>) => {
            return Object.values(item).some(value => {
                if (value != null) {
                    return value.toString().toLowerCase().includes(query.toString().toLowerCase())
                }

                return false
            })
        })
    }
    return stabilizedThis.map((el: any[]) => el[0]);
}