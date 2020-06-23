// Interface face for dictuonary of asked type
export interface Dictionary {
    [key: string]: number
}

// This function returns answer dictionary
export function solution(D: Dictionary) {
    // fetched the keys from the dict and creates values array.
    let keys = Object.keys(D);
    let values: Array<number> = [];
    keys.forEach(key => {
        values.push(D[key]);
    });

    var gap: number;
    for (let i = 0; i < keys.length; i++) {
        let current_date = new Date(keys[i]),
            next_date = new Date(keys[i + 1]);

        // If there is a difference of more then one "date" i.e if there is a gap between dates this logic runs
        if (1 < Math.ceil(Math.abs(next_date.getTime() - current_date.getTime()) / (1000 * 3600 * 24))) {
            gap = Math.ceil(Math.abs(next_date.getTime() - current_date.getTime()) / (1000 * 3600 * 24));
            var res = new Date(current_date.setDate(current_date.getDate() + 1));
            let calculated_value = (values[i] + ((values[i + 1] - values[i]) / gap));

            // inserts missing values and keys into respective arrays at particular index
            values.splice(i + 1, 0, calculated_value);
            keys.splice(i + 1, 0, res.toLocaleDateString('fr-CA'));
        }
    }
    // maked dict. empty in order to generate answer dict. from arrays
    D = {}
    // generates answer dict.
    for (let i = 0; i < keys.length; i++) {
        D[keys[i]] = values[i];
    }
    return D;
}