export const SearchBox = ({value, onChange }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Write searching query"
                onChange={e => onChange(e.target.value)}
                value={value}
            />
        </div>
    );
};