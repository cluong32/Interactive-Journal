function Entry() {
    return (
        <div>
            <h2>Editor</h2>

            <input placeholder='Title'/>

            <textarea
                placeholder='Write your thoughts...'
                rows={15}
            />
        </div>
    );
}

export default Entry;