function mySettings() {
		return {
			onShiftEnter:  	{keepDefault:false, replaceWith:'<br />\n'},
			onCtrlEnter:  	{keepDefault:false, openWith:'\n<p>', closeWith:'</p>'},
			onTab:    		{keepDefault:false, replaceWith:'    '},
			markupSet:  [
				{name:'H4', className:'editor-h4', openWith:'<h4>', closeWith:'</h4>' },
				{name:'H5', className:'editor-h5', openWith:'<h5>', closeWith:'</h5>' },
				{name:'H6', className:'editor-h6', openWith:'<h6>', closeWith:'</h6>' },
				{separator:'---------------' },
				{name: 'Жирный', className:'editor-bold', key:'B', openWith:'(!(<strong>|!|<b>)!)', closeWith:'(!(</strong>|!|</b>)!)' },
				{name: 'Курсив', className:'editor-italic', key:'I', openWith:'(!(<em>|!|<i>)!)', closeWith:'(!(</em>|!|</i>)!)'  },
				{name: 'Зачеркнуть', className:'editor-stroke', key:'S', openWith:'<s>', closeWith:'</s>' },
				{name: 'Подчеркнуть', className:'editor-underline', key:'U', openWith:'<u>', closeWith:'</u>' },
				{name: 'Цитировать', className:'editor-quote', key:'Q', replaceWith: function(m) { if (m.selectionOuter) return '<blockquote>'+m.selectionOuter+'</blockquote>'; else if (m.selection) return '<blockquote>'+m.selection+'</blockquote>'; else return '<blockquote></blockquote>' } },
				{name: 'Код', className:'editor-code', openWith:'<code>', closeWith:'</code>' },
				{separator:'---------------' },
				{name: 'Список', className:'editor-ul', openWith:'    <li>', closeWith:'</li>', multiline: true, openBlockWith:'<ul>\n', closeBlockWith:'\n</ul>' },
				{name: 'Нумеронный список', className:'editor-ol', openWith:'    <li>', closeWith:'</li>', multiline: true, openBlockWith:'<ol>\n', closeBlockWith:'\n</ol>' },
				{name: 'Добавить строку', className:'editor-li', openWith:'<li>', closeWith:'</li>' },
				{separator:'---------------' },
                {name: 'Добавить изображение из Web', className:'editor-image', replaceWith:'<img src="[!['+'Введите адрес изображения:'+':!:http://]!]" />' },
                {name: 'Добавить ссылку', className:'editor-link', key:'L', openWith:'<a href="[!['+'Введите url адрес:'+':!:http://]!]"(!( title="[![Title]!]")!)>', closeWith:'</a>', placeHolder:'Введите название ссылки..' },
                {separator:'---------------' },
				{name: 'Очистить тэги', className:'editor-clean', replaceWith: function(markitup) { return markitup.selection.replace(/<(.*?)>/g, "") } },
				{name: 'Cut', className:'editor-cut', replaceWith: function(markitup) { if (markitup.selection) return '<cut name="'+markitup.selection+'">'; else return '<cut>' }}
			]
		}
};