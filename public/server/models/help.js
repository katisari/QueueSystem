require('./user.js');

const HelpSchema = new mongoose.Schema({
    title: {type: String, required: [true, 'Help title cannot be blank!'] },
    help_method: {type: String, default: ''},
    user: UserSchema
}, {timestamps: true});
mongoose.model('Help', HelpSchema);
Help = mongoose.model('Help');
