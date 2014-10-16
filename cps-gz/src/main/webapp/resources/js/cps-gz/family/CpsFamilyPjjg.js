var ENTITY_URL_LIST = "/family/CpsFamilyPjjg/pager";
var ENTITY_URL_SAVE = "/family/CpsFamilyPjjg/save";
var ENTITY_URL_UPDATE = "/family/CpsFamilyPjjg/update";
var ENTITY_URL_DELETE = "/family/CpsFamilyPjjg/delete";
var PAGESIZE=50;
/*
 * CPS_FAMILY_PJJG 
 * @author 
 * @date 2014-10-09
 */
CpsFamilyPjjg = Ext.extend(Ext.ux.Form,{
	constructor: function(){
		this.pjjgId = new Ext.form.NumberField({
            fieldLabel: '<font color="red">*</font>PJJG_ID',
            name: 'pjjgId',
            allowBlank: false,
            allowNegative :false,
            maxLength:19,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.familyId = new Ext.form.NumberField({
            fieldLabel: 'FAMILY_ID',
            name: 'familyId',
            allowBlank: false,
            allowNegative :false,
            maxLength:10,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.hynl = this.createTextField('按户主“20岁以下、20（含）岁—30岁、30岁（含）—50岁、50岁（含）—60岁,60岁以上”5个年龄段分别给予“0、1、2、1、0.5”
的分值','hynl','95%','',null,100,'长度超过不能100');
		this.hynlDf = new Ext.form.NumberField({
            fieldLabel: 'HYNL_DF',
            name: 'hynlDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.whcd = this.createTextField('WHCD','whcd','95%','',null,100,'长度超过不能100');
		this.whcdDf = new Ext.form.NumberField({
            fieldLabel: 'WHCD_DF',
            name: 'whcdDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.hyzk = this.createTextField('HYZK','hyzk','95%','',null,100,'长度超过不能100');
		this.hyzkDf = new Ext.form.NumberField({
            fieldLabel: 'HYZK_DF',
            name: 'hyzkDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.zfjg = this.createTextField('ZFJG','zfjg','95%','',null,100,'长度超过不能100');
		this.zfjgDf = new Ext.form.NumberField({
            fieldLabel: 'ZFJG_DF',
            name: 'zfjgDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.jtcysfjk = this.createTextField('JTCYSFJK','jtcysfjk','95%','',null,100,'长度超过不能100');
		this.jtcysfjkDf = new Ext.form.NumberField({
            fieldLabel: 'JTCYSFJK_DF',
            name: 'jtcysfjkDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.jthmqk = this.createTextField('JTHMQK','jthmqk','95%','',null,100,'长度超过不能100');
		this.jthmqkDf = new Ext.form.NumberField({
            fieldLabel: 'JTHMQK_DF',
            name: 'jthmqkDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.llhmqk = this.createTextField('LLHMQK','llhmqk','95%','',null,100,'长度超过不能100');
		this.llhmqkDf = new Ext.form.NumberField({
            fieldLabel: 'LLHMQK_DF',
            name: 'llhmqkDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.jtsrfzb = this.createTextField('JTSRFZB','jtsrfzb','95%','',null,100,'长度超过不能100');
		this.jtsrfzbDf = new Ext.form.NumberField({
            fieldLabel: 'JTSRFZB_DF',
            name: 'jtsrfzbDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.jtsrqk = this.createTextField('JTSRQK','jtsrqk','95%','',null,100,'长度超过不能100');
		this.jtsrqkDf = new Ext.form.NumberField({
            fieldLabel: 'JTSRQK_DF',
            name: 'jtsrqkDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.jtzcqk = this.createTextField('JTZCQK','jtzcqk','95%','',null,100,'长度超过不能100');
		this.jtzcqkDf = new Ext.form.NumberField({
            fieldLabel: 'JTZCQK_DF',
            name: 'jtzcqkDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.jtjsr = this.createTextField('JTJSR','jtjsr','95%','',null,100,'长度超过不能100');
		this.jtjsrDf = new Ext.form.NumberField({
            fieldLabel: 'JTJSR_DF',
            name: 'jtjsrDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.cjbxqk = this.createTextField('CJBXQK','cjbxqk','95%','',null,100,'长度超过不能100');
		this.cjbxqkDf = new Ext.form.NumberField({
            fieldLabel: 'CJBXQK_DF',
            name: 'cjbxqkDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.cjjnpxqk = this.createTextField('CJJNPXQK','cjjnpxqk','95%','',null,100,'长度超过不能100');
		this.cjjnpxqkDf = new Ext.form.NumberField({
            fieldLabel: 'CJJNPXQK_DF',
            name: 'cjjnpxqkDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.zyzqk = this.createTextField('ZYZQK','zyzqk','95%','',null,100,'长度超过不能100');
		this.zyzqkDf = new Ext.form.NumberField({
            fieldLabel: 'ZYZQK_DF',
            name: 'zyzqkDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.nyye = this.createTextField('NYYE','nyye','95%','',null,100,'长度超过不能100');
		this.nyyeDf = new Ext.form.NumberField({
            fieldLabel: 'NYYE_DF',
            name: 'nyyeDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.scjynl = this.createTextField('SCJYNL','scjynl','95%','',null,100,'长度超过不能100');
		this.scjynlDf = new Ext.form.NumberField({
            fieldLabel: 'SCJYNL_DF',
            name: 'scjynlDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.scjyqj = this.createTextField('SCJYQJ','scjyqj','95%','',null,100,'长度超过不能100');
		this.scjyqjDf = new Ext.form.NumberField({
            fieldLabel: 'SCJYQJ_DF',
            name: 'scjyqjDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.dkls = this.createTextField('DKLS','dkls','95%','',null,100,'长度超过不能100');
		this.dklsDf = new Ext.form.NumberField({
            fieldLabel: 'DKLS_DF',
            name: 'dklsDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.blxyjl = this.createTextField('BLXYJL','blxyjl','95%','',null,100,'长度超过不能100');
		this.blxyjlDf = new Ext.form.NumberField({
            fieldLabel: 'BLXYJL_DF',
            name: 'blxyjlDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.dkzyxs = this.createTextField('DKZYXS','dkzyxs','95%','',null,100,'长度超过不能100');
		this.dkzyxsDf = new Ext.form.NumberField({
            fieldLabel: 'DKZYXS_DF',
            name: 'dkzyxsDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.nfaxfx = this.createTextField('NFAXFX','nfaxfx','95%','',null,100,'长度超过不能100');
		this.nfaxfxDf = new Ext.form.NumberField({
            fieldLabel: 'NFAXFX_DF',
            name: 'nfaxfxDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.cjzyhzzzqk = this.createTextField('CJZYHZZZQK','cjzyhzzzqk','95%','',null,100,'长度超过不能100');
		this.cjzyhzzzqkDf = new Ext.form.NumberField({
            fieldLabel: 'CJZYHZZZQK_DF',
            name: 'cjzyhzzzqkDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.cjmjzzqk = this.createTextField('CJMJZZQK','cjmjzzqk','95%','',null,100,'长度超过不能100');
		this.cjmjzzqkDf = new Ext.form.NumberField({
            fieldLabel: 'CJMJZZQK_DF',
            name: 'cjmjzzqkDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.hdbzqk = this.createTextField('HDBZQK','hdbzqk','95%','',null,100,'长度超过不能100');
		this.hdbzqkDf = new Ext.form.NumberField({
            fieldLabel: 'HDBZQK_DF',
            name: 'hdbzqkDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.wfzaglqk = this.createTextField('WFZAGLQK','wfzaglqk','95%','',null,100,'长度超过不能100');
		this.wfzaglqkDf = new Ext.form.NumberField({
            fieldLabel: 'WFZAGLQK_DF',
            name: 'wfzaglqkDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.ddcwhpj = this.createTextField('DDCWHPJ','ddcwhpj','95%','',null,100,'长度超过不能100');
		this.ddcwhpjDf = new Ext.form.NumberField({
            fieldLabel: 'DDCWHPJ_DF',
            name: 'ddcwhpjDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.ddxyhj = this.createTextField('DDXYHJ','ddxyhj','95%','',null,100,'长度超过不能100');
		this.ddxyhjDf = new Ext.form.NumberField({
            fieldLabel: 'DDXYHJ_DF',
            name: 'ddxyhjDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.ywfzxw = this.createTextField('YWFZXW','ywfzxw','95%','',null,100,'长度超过不能100');
		this.ywfzxwDf = new Ext.form.NumberField({
            fieldLabel: 'YWFZXW_DF',
            name: 'ywfzxwDf',
            allowBlank: false,
            allowNegative :false,
            maxLength:53,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.remark = this.createTextField('REMARK','remark','95%','',null,512,'长度超过不能512');
		this.createUser = new Ext.form.NumberField({
            fieldLabel: '创建人',
            name: 'createUser',
            allowBlank: false,
            allowNegative :false,
            maxLength:10,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.createTime = this.createDateField('创建时间','createTime','Y-m-d','95%');
		this.createTime.value = new Date().format('Ymd');
		this.updateUser = new Ext.form.NumberField({
            fieldLabel: '修改人',
            name: 'updateUser',
            allowBlank: false,
            allowNegative :false,
            maxLength:10,
            maxLengthText:'长度超过不能10', 
            anchor: '95%',
            cls:'forbiddenZH',
            blankText: '该选项为必填项,请输入内容...'
        });
		this.updateTime = this.createDateField('修改时间','updateTime','Y-m-d','95%');
		this.updateTime.value = new Date().format('Ymd');
		
		this.familyId.allowBlank = true;
		this.hynl.allowBlank = true;
		this.hynlDf.allowBlank = true;
		this.whcd.allowBlank = true;
		this.whcdDf.allowBlank = true;
		this.hyzk.allowBlank = true;
		this.hyzkDf.allowBlank = true;
		this.zfjg.allowBlank = true;
		this.zfjgDf.allowBlank = true;
		this.jtcysfjk.allowBlank = true;
		this.jtcysfjkDf.allowBlank = true;
		this.jthmqk.allowBlank = true;
		this.jthmqkDf.allowBlank = true;
		this.llhmqk.allowBlank = true;
		this.llhmqkDf.allowBlank = true;
		this.jtsrfzb.allowBlank = true;
		this.jtsrfzbDf.allowBlank = true;
		this.jtsrqk.allowBlank = true;
		this.jtsrqkDf.allowBlank = true;
		this.jtzcqk.allowBlank = true;
		this.jtzcqkDf.allowBlank = true;
		this.jtjsr.allowBlank = true;
		this.jtjsrDf.allowBlank = true;
		this.cjbxqk.allowBlank = true;
		this.cjbxqkDf.allowBlank = true;
		this.cjjnpxqk.allowBlank = true;
		this.cjjnpxqkDf.allowBlank = true;
		this.zyzqk.allowBlank = true;
		this.zyzqkDf.allowBlank = true;
		this.nyye.allowBlank = true;
		this.nyyeDf.allowBlank = true;
		this.scjynl.allowBlank = true;
		this.scjynlDf.allowBlank = true;
		this.scjyqj.allowBlank = true;
		this.scjyqjDf.allowBlank = true;
		this.dkls.allowBlank = true;
		this.dklsDf.allowBlank = true;
		this.blxyjl.allowBlank = true;
		this.blxyjlDf.allowBlank = true;
		this.dkzyxs.allowBlank = true;
		this.dkzyxsDf.allowBlank = true;
		this.nfaxfx.allowBlank = true;
		this.nfaxfxDf.allowBlank = true;
		this.cjzyhzzzqk.allowBlank = true;
		this.cjzyhzzzqkDf.allowBlank = true;
		this.cjmjzzqk.allowBlank = true;
		this.cjmjzzqkDf.allowBlank = true;
		this.hdbzqk.allowBlank = true;
		this.hdbzqkDf.allowBlank = true;
		this.wfzaglqk.allowBlank = true;
		this.wfzaglqkDf.allowBlank = true;
		this.ddcwhpj.allowBlank = true;
		this.ddcwhpjDf.allowBlank = true;
		this.ddxyhj.allowBlank = true;
		this.ddxyhjDf.allowBlank = true;
		this.ywfzxw.allowBlank = true;
		this.ywfzxwDf.allowBlank = true;
		this.remark.allowBlank = true;
		this.createUser.allowBlank = true;
		this.createTime.allowBlank = true;
		this.updateUser.allowBlank = true;
		this.updateTime.allowBlank = true;
        
        CpsFamilyPjjg.superclass.constructor.call(this, {
	            anchor: '100%',
	            autoHeight:true,
	            labelWidth: 90,
	            labelAlign :'right',
	            frame: true,
	            bodyStyle:"padding: 5px 5px 0",
	            layout: 'tableform',
	            layoutConfig: {columns: 2},
	            items:[
					this.pjjgId,
					this.familyId,
					this.hynl,
					this.hynlDf,
					this.whcd,
					this.whcdDf,
					this.hyzk,
					this.hyzkDf,
					this.zfjg,
					this.zfjgDf,
					this.jtcysfjk,
					this.jtcysfjkDf,
					this.jthmqk,
					this.jthmqkDf,
					this.llhmqk,
					this.llhmqkDf,
					this.jtsrfzb,
					this.jtsrfzbDf,
					this.jtsrqk,
					this.jtsrqkDf,
					this.jtzcqk,
					this.jtzcqkDf,
					this.jtjsr,
					this.jtjsrDf,
					this.cjbxqk,
					this.cjbxqkDf,
					this.cjjnpxqk,
					this.cjjnpxqkDf,
					this.zyzqk,
					this.zyzqkDf,
					this.nyye,
					this.nyyeDf,
					this.scjynl,
					this.scjynlDf,
					this.scjyqj,
					this.scjyqjDf,
					this.dkls,
					this.dklsDf,
					this.blxyjl,
					this.blxyjlDf,
					this.dkzyxs,
					this.dkzyxsDf,
					this.nfaxfx,
					this.nfaxfxDf,
					this.cjzyhzzzqk,
					this.cjzyhzzzqkDf,
					this.cjmjzzqk,
					this.cjmjzzqkDf,
					this.hdbzqk,
					this.hdbzqkDf,
					this.wfzaglqk,
					this.wfzaglqkDf,
					this.ddcwhpj,
					this.ddcwhpjDf,
					this.ddxyhj,
					this.ddxyhjDf,
					this.ywfzxw,
					this.ywfzxwDf,
					this.remark,
					this.createUser,
					this.createTime,
					this.updateUser,
					this.updateTime
	            ],
	            buttonAlign :'center',
	            buttons: [
	               {text: '保存', width: 20,iconCls: 'save', hidden: false,handler:this.addFormClick,scope:this},
	               {text: '修改', width: 20,iconCls:'edit', hidden: true, handler: this.updateFormClick, scope: this},
	               {text: '重置', width: 20,iconCls:'redo', hidden: true, handler: this.onResumeClick, scope: this},               
	               {text: '清空', width: 20, iconCls:'redo',  handler: this.resetFormClick, scope: this},
	               {text: '关闭', width: 20,iconCls:'delete', handler: this.onCloseClick, scope: this}
	            ]
	        });
	},
	addFormClick: function(){
		if(this.getForm().isValid()){
			this.getForm().submit({
				waitMsg: '正在提交数据...',
				url: ENTITY_URL_SAVE,
				method: 'POST',
				success: function(form,action){
					Ext.Msg.alert("系统提示：","添加成功！");
					cpsFamilyPjjgGrid.store.load({params:{start:0,limit:PAGESIZE}});
					cpsFamilyPjjgGrid.cpsFamilyPjjgWindow.hide();
					
				},
				failure: function(form,action){
					Ext.MessageBox.alert("系统提示：",action.result.message);
				}
			});
		}
	},
	updateFormClick: function(){
		if(this.getForm().isValid()){
			this.getForm().submit({
				waitMsg: '正在提交，请稍后...',
				url: ENTITY_URL_UPDATE,
				method: 'POST',
				success: function(form,action){
					Ext.MessageBox.alert("系统提示：","修改成功！");
					cpsFamilyPjjgGrid.cpsFamilyPjjgUpdateWindow.hide();
					cpsFamilyPjjgGrid.vbbar.doLoad(cpsFamilyPjjgGrid.vbbar.cursor);
				},
				failure: function(form,action){
					Ext.MessageBox.alert("系统提示：",action.result.message);
				}
			});
		}
	},
	//关闭
    onCloseClick: function(){
    	if(cpsFamilyPjjgGrid.cpsFamilyPjjgUpdateWindow)
    	cpsFamilyPjjgGrid.cpsFamilyPjjgUpdateWindow.cpsFamilyPjjg.getForm().reset();
        this.ownerCt.hide();
    },
  //清空
    resetFormClick: function() {        
        this.getForm().reset();
    }, 
  //重置
    onResumeClick: function() {        
    	cpsFamilyPjjgGrid.onModifyClick();
    }
	
});

/**************CpsFamilyPjjgWindow*********************/
CpsFamilyPjjgWindow = Ext.extend(Ext.Window,{
	
	constructor: function(grid){
		this.cpsFamilyPjjg = new CpsFamilyPjjg();
		CpsFamilyPjjgWindow.superclass.constructor.call(this,{
			title: '新增',
			 width: 700,
			 anchor: '100%',
			autoHeight:true,
			resizable : false, //可变尺寸的；可调整大小的
			 plain: true,
			 modal: true,
			closeAction: 'hide',
			items:[this.cpsFamilyPjjg]
		});
	}
});

/********************CpsFamilyPjjgUpdateWindow组件*************************/
CpsFamilyPjjgUpdateWindow = Ext.extend(Ext.Window, {
	constructionForm : null,
    constructor: function() {
    	this.cpsFamilyPjjg = new CpsFamilyPjjg();
    	this.cpsFamilyPjjg.buttons[0].hide();   //隐藏添加按钮
    	this.cpsFamilyPjjg.buttons[1].show();   //显示修改按钮
    	this.cpsFamilyPjjg.buttons[2].show();   //显示重置按钮
    	this.cpsFamilyPjjg.buttons[3].hide();   //隐藏清空按钮
    	
    	CpsFamilyPjjgUpdateWindow.superclass.constructor.call(this, {
			title: '修改',
			width: 700,
			anchor: '100%',
			autoHeight: true,
			resizable: false,
			plain: true,
			modal: true,
			closeAction: 'hide',
            items: [this.cpsFamilyPjjg]
        });
    }
});

/****************CpsFamilyPjjgGrid***********************/
CpsFamilyPjjgGrid = Ext.extend(UxGrid,{
	constructor: function(height,width){
		this.store = new Ext.data.Store({
			
			proxy: new Ext.data.HttpProxy({url:ENTITY_URL_LIST,method:'POST'}),
			reader: new Ext.data.JsonReader({totalProperty:'total',root:'rows'},[
		            {name:'pjjgId'},
		            {name:'familyId'},
		            {name:'hynl'},
		            {name:'hynlDf'},
		            {name:'whcd'},
		            {name:'whcdDf'},
		            {name:'hyzk'},
		            {name:'hyzkDf'},
		            {name:'zfjg'},
		            {name:'zfjgDf'},
		            {name:'jtcysfjk'},
		            {name:'jtcysfjkDf'},
		            {name:'jthmqk'},
		            {name:'jthmqkDf'},
		            {name:'llhmqk'},
		            {name:'llhmqkDf'},
		            {name:'jtsrfzb'},
		            {name:'jtsrfzbDf'},
		            {name:'jtsrqk'},
		            {name:'jtsrqkDf'},
		            {name:'jtzcqk'},
		            {name:'jtzcqkDf'},
		            {name:'jtjsr'},
		            {name:'jtjsrDf'},
		            {name:'cjbxqk'},
		            {name:'cjbxqkDf'},
		            {name:'cjjnpxqk'},
		            {name:'cjjnpxqkDf'},
		            {name:'zyzqk'},
		            {name:'zyzqkDf'},
		            {name:'nyye'},
		            {name:'nyyeDf'},
		            {name:'scjynl'},
		            {name:'scjynlDf'},
		            {name:'scjyqj'},
		            {name:'scjyqjDf'},
		            {name:'dkls'},
		            {name:'dklsDf'},
		            {name:'blxyjl'},
		            {name:'blxyjlDf'},
		            {name:'dkzyxs'},
		            {name:'dkzyxsDf'},
		            {name:'nfaxfx'},
		            {name:'nfaxfxDf'},
		            {name:'cjzyhzzzqk'},
		            {name:'cjzyhzzzqkDf'},
		            {name:'cjmjzzqk'},
		            {name:'cjmjzzqkDf'},
		            {name:'hdbzqk'},
		            {name:'hdbzqkDf'},
		            {name:'wfzaglqk'},
		            {name:'wfzaglqkDf'},
		            {name:'ddcwhpj'},
		            {name:'ddcwhpjDf'},
		            {name:'ddxyhj'},
		            {name:'ddxyhjDf'},
		            {name:'ywfzxw'},
		            {name:'ywfzxwDf'},
		            {name:'remark'},
		            {name:'createUser'},
		            {name:'createTime'},
		            {name:'updateUser'},
		            {name:'updateTime'}
					 ])
		});
		this.vtbar = new Ext.Toolbar({
			items: [
			       '-',{xtype:'button',text:'添加',iconCls:'add',handler:this.onAddClick,scope:this}, 
			       '-',{xtype:'button',text:'修改',iconCls:'edit',handler:this.onModifyClick,scope:this}, 
			       '-',{xtype:'button',text:'删除',iconCls:'delete',handler:this.onDeleteClick,scope:this},
					'-',{xtype:'label',text:'PJJG_ID'},{xtype:'textfield',id:'Q_pjjgId_L_EQ'},
					'-',{xtype:'label',text:'FAMILY_ID'},{xtype:'textfield',id:'Q_familyId_N_EQ'},
					'-',{xtype:'label',text:'按户主“20岁以下、20（含）岁—30岁、30岁（含）—50岁、50岁（含）—60岁,60岁以上”5个年龄段分别给予“0、1、2、1、0.5”
的分值'},{xtype:'textfield',id:'Q_hynl_S_LK'},
					'-',{xtype:'label',text:'HYNL_DF'},{xtype:'textfield',id:'Q_hynlDf_DB_EQ'},
					//'-',{xtype:'label',text:'WHCD'},{xtype:'textfield',id:'Q_whcd_S_LK'},
					//'-',{xtype:'label',text:'WHCD_DF'},{xtype:'textfield',id:'Q_whcdDf_DB_EQ'},
					//'-',{xtype:'label',text:'HYZK'},{xtype:'textfield',id:'Q_hyzk_S_LK'},
					//'-',{xtype:'label',text:'HYZK_DF'},{xtype:'textfield',id:'Q_hyzkDf_DB_EQ'},
					//'-',{xtype:'label',text:'ZFJG'},{xtype:'textfield',id:'Q_zfjg_S_LK'},
					//'-',{xtype:'label',text:'ZFJG_DF'},{xtype:'textfield',id:'Q_zfjgDf_DB_EQ'},
					//'-',{xtype:'label',text:'JTCYSFJK'},{xtype:'textfield',id:'Q_jtcysfjk_S_LK'},
					//'-',{xtype:'label',text:'JTCYSFJK_DF'},{xtype:'textfield',id:'Q_jtcysfjkDf_DB_EQ'},
					//'-',{xtype:'label',text:'JTHMQK'},{xtype:'textfield',id:'Q_jthmqk_S_LK'},
					//'-',{xtype:'label',text:'JTHMQK_DF'},{xtype:'textfield',id:'Q_jthmqkDf_DB_EQ'},
					//'-',{xtype:'label',text:'LLHMQK'},{xtype:'textfield',id:'Q_llhmqk_S_LK'},
					//'-',{xtype:'label',text:'LLHMQK_DF'},{xtype:'textfield',id:'Q_llhmqkDf_DB_EQ'},
					//'-',{xtype:'label',text:'JTSRFZB'},{xtype:'textfield',id:'Q_jtsrfzb_S_LK'},
					//'-',{xtype:'label',text:'JTSRFZB_DF'},{xtype:'textfield',id:'Q_jtsrfzbDf_DB_EQ'},
					//'-',{xtype:'label',text:'JTSRQK'},{xtype:'textfield',id:'Q_jtsrqk_S_LK'},
					//'-',{xtype:'label',text:'JTSRQK_DF'},{xtype:'textfield',id:'Q_jtsrqkDf_DB_EQ'},
					//'-',{xtype:'label',text:'JTZCQK'},{xtype:'textfield',id:'Q_jtzcqk_S_LK'},
					//'-',{xtype:'label',text:'JTZCQK_DF'},{xtype:'textfield',id:'Q_jtzcqkDf_DB_EQ'},
					//'-',{xtype:'label',text:'JTJSR'},{xtype:'textfield',id:'Q_jtjsr_S_LK'},
					//'-',{xtype:'label',text:'JTJSR_DF'},{xtype:'textfield',id:'Q_jtjsrDf_DB_EQ'},
					//'-',{xtype:'label',text:'CJBXQK'},{xtype:'textfield',id:'Q_cjbxqk_S_LK'},
					//'-',{xtype:'label',text:'CJBXQK_DF'},{xtype:'textfield',id:'Q_cjbxqkDf_DB_EQ'},
					//'-',{xtype:'label',text:'CJJNPXQK'},{xtype:'textfield',id:'Q_cjjnpxqk_S_LK'},
					//'-',{xtype:'label',text:'CJJNPXQK_DF'},{xtype:'textfield',id:'Q_cjjnpxqkDf_DB_EQ'},
					//'-',{xtype:'label',text:'ZYZQK'},{xtype:'textfield',id:'Q_zyzqk_S_LK'},
					//'-',{xtype:'label',text:'ZYZQK_DF'},{xtype:'textfield',id:'Q_zyzqkDf_DB_EQ'},
					//'-',{xtype:'label',text:'NYYE'},{xtype:'textfield',id:'Q_nyye_S_LK'},
					//'-',{xtype:'label',text:'NYYE_DF'},{xtype:'textfield',id:'Q_nyyeDf_DB_EQ'},
					//'-',{xtype:'label',text:'SCJYNL'},{xtype:'textfield',id:'Q_scjynl_S_LK'},
					//'-',{xtype:'label',text:'SCJYNL_DF'},{xtype:'textfield',id:'Q_scjynlDf_DB_EQ'},
					//'-',{xtype:'label',text:'SCJYQJ'},{xtype:'textfield',id:'Q_scjyqj_S_LK'},
					//'-',{xtype:'label',text:'SCJYQJ_DF'},{xtype:'textfield',id:'Q_scjyqjDf_DB_EQ'},
					//'-',{xtype:'label',text:'DKLS'},{xtype:'textfield',id:'Q_dkls_S_LK'},
					//'-',{xtype:'label',text:'DKLS_DF'},{xtype:'textfield',id:'Q_dklsDf_DB_EQ'},
					//'-',{xtype:'label',text:'BLXYJL'},{xtype:'textfield',id:'Q_blxyjl_S_LK'},
					//'-',{xtype:'label',text:'BLXYJL_DF'},{xtype:'textfield',id:'Q_blxyjlDf_DB_EQ'},
					//'-',{xtype:'label',text:'DKZYXS'},{xtype:'textfield',id:'Q_dkzyxs_S_LK'},
					//'-',{xtype:'label',text:'DKZYXS_DF'},{xtype:'textfield',id:'Q_dkzyxsDf_DB_EQ'},
					//'-',{xtype:'label',text:'NFAXFX'},{xtype:'textfield',id:'Q_nfaxfx_S_LK'},
					//'-',{xtype:'label',text:'NFAXFX_DF'},{xtype:'textfield',id:'Q_nfaxfxDf_DB_EQ'},
					//'-',{xtype:'label',text:'CJZYHZZZQK'},{xtype:'textfield',id:'Q_cjzyhzzzqk_S_LK'},
					//'-',{xtype:'label',text:'CJZYHZZZQK_DF'},{xtype:'textfield',id:'Q_cjzyhzzzqkDf_DB_EQ'},
					//'-',{xtype:'label',text:'CJMJZZQK'},{xtype:'textfield',id:'Q_cjmjzzqk_S_LK'},
					//'-',{xtype:'label',text:'CJMJZZQK_DF'},{xtype:'textfield',id:'Q_cjmjzzqkDf_DB_EQ'},
					//'-',{xtype:'label',text:'HDBZQK'},{xtype:'textfield',id:'Q_hdbzqk_S_LK'},
					//'-',{xtype:'label',text:'HDBZQK_DF'},{xtype:'textfield',id:'Q_hdbzqkDf_DB_EQ'},
					//'-',{xtype:'label',text:'WFZAGLQK'},{xtype:'textfield',id:'Q_wfzaglqk_S_LK'},
					//'-',{xtype:'label',text:'WFZAGLQK_DF'},{xtype:'textfield',id:'Q_wfzaglqkDf_DB_EQ'},
					//'-',{xtype:'label',text:'DDCWHPJ'},{xtype:'textfield',id:'Q_ddcwhpj_S_LK'},
					//'-',{xtype:'label',text:'DDCWHPJ_DF'},{xtype:'textfield',id:'Q_ddcwhpjDf_DB_EQ'},
					//'-',{xtype:'label',text:'DDXYHJ'},{xtype:'textfield',id:'Q_ddxyhj_S_LK'},
					//'-',{xtype:'label',text:'DDXYHJ_DF'},{xtype:'textfield',id:'Q_ddxyhjDf_DB_EQ'},
					//'-',{xtype:'label',text:'YWFZXW'},{xtype:'textfield',id:'Q_ywfzxw_S_LK'},
					//'-',{xtype:'label',text:'YWFZXW_DF'},{xtype:'textfield',id:'Q_ywfzxwDf_DB_EQ'},
					//'-',{xtype:'label',text:'REMARK'},{xtype:'textfield',id:'Q_remark_S_LK'},
					//'-',{xtype:'label',text:'创建人'},{xtype:'textfield',id:'Q_createUser_N_EQ'},
					//'-',{xtype:'label',text:'创建时间'},{xtype:'datefield',format:'Ymd',id:'Q_createTime_D_GT',editable : false,value:new Date().format('Ymd')},
					//'-',{xtype:'label',text:'修改人'},{xtype:'textfield',id:'Q_updateUser_N_EQ'},
					//'-',{xtype:'label',text:'修改时间'},{xtype:'datefield',format:'Ymd',id:'Q_updateTime_D_GT',editable : false,value:new Date().format('Ymd')},
			       '-',{xtype:'button',text:'查询',iconCls:'query',handler:function(){
			       			var params = {};
			       			cpsFamilyPjjgGrid.vtbar.items.each(function(item,index,length){ 
		       					if((""+item.getXType()).indexOf("field") != -1 && item.getValue() != '') {
		       						if (item.getXType() == 'datefield') {
		       							params[item.getId()] = item.getValue().format(item.format);
		       						} else {
		       							params[item.getId()] = item.getValue();
		       						}
		       					}
							});
	    	   				cpsFamilyPjjgGrid.store.baseParams= params;
	    	   				cpsFamilyPjjgGrid.store.load({params:{start:0,limit:PAGESIZE}});
	    	   			}
	       			},
					'-',{xtype:'button',text:'重置',iconCls:'refresh',handler:function(){
						cpsFamilyPjjgGrid.vtbar.items.each(function(item,index,length){   
							if((""+item.getXType()).indexOf("field") != -1) {
								item.setValue('');
							}
						  });  
    	   			}}
			]
		});
		this.vbbar = this.createPagingToolbar(PAGESIZE);

		this.vsm = new Ext.grid.CheckboxSelectionModel();
		this.vcm = new Ext.grid.ColumnModel([new Ext.grid.RowNumberer(),
		             this.vsm,
		            {header:'PJJG_ID',dataIndex:'pjjgId',width:100,sortable:true,hidden:false},
		            {header:'FAMILY_ID',dataIndex:'familyId',width:100,sortable:true,hidden:false},
		            {header:'按户主“20岁以下、20（含）岁—30岁、30岁（含）—50岁、50岁（含）—60岁,60岁以上”5个年龄段分别给予“0、1、2、1、0.5”
的分值',dataIndex:'hynl',width:100,sortable:true,hidden:false},
		            {header:'HYNL_DF',dataIndex:'hynlDf',width:100,sortable:true,hidden:false},
		            {header:'WHCD',dataIndex:'whcd',width:100,sortable:true,hidden:false},
		            {header:'WHCD_DF',dataIndex:'whcdDf',width:100,sortable:true,hidden:false},
		            {header:'HYZK',dataIndex:'hyzk',width:100,sortable:true,hidden:false},
		            {header:'HYZK_DF',dataIndex:'hyzkDf',width:100,sortable:true,hidden:false},
		            {header:'ZFJG',dataIndex:'zfjg',width:100,sortable:true,hidden:false},
		            {header:'ZFJG_DF',dataIndex:'zfjgDf',width:100,sortable:true,hidden:false},
		            {header:'JTCYSFJK',dataIndex:'jtcysfjk',width:100,sortable:true,hidden:false},
		            {header:'JTCYSFJK_DF',dataIndex:'jtcysfjkDf',width:100,sortable:true,hidden:false},
		            {header:'JTHMQK',dataIndex:'jthmqk',width:100,sortable:true,hidden:false},
		            {header:'JTHMQK_DF',dataIndex:'jthmqkDf',width:100,sortable:true,hidden:false},
		            {header:'LLHMQK',dataIndex:'llhmqk',width:100,sortable:true,hidden:false},
		            {header:'LLHMQK_DF',dataIndex:'llhmqkDf',width:100,sortable:true,hidden:false},
		            {header:'JTSRFZB',dataIndex:'jtsrfzb',width:100,sortable:true,hidden:false},
		            {header:'JTSRFZB_DF',dataIndex:'jtsrfzbDf',width:100,sortable:true,hidden:false},
		            {header:'JTSRQK',dataIndex:'jtsrqk',width:100,sortable:true,hidden:false},
		            {header:'JTSRQK_DF',dataIndex:'jtsrqkDf',width:100,sortable:true,hidden:false},
		            {header:'JTZCQK',dataIndex:'jtzcqk',width:100,sortable:true,hidden:false},
		            {header:'JTZCQK_DF',dataIndex:'jtzcqkDf',width:100,sortable:true,hidden:false},
		            {header:'JTJSR',dataIndex:'jtjsr',width:100,sortable:true,hidden:false},
		            {header:'JTJSR_DF',dataIndex:'jtjsrDf',width:100,sortable:true,hidden:false},
		            {header:'CJBXQK',dataIndex:'cjbxqk',width:100,sortable:true,hidden:false},
		            {header:'CJBXQK_DF',dataIndex:'cjbxqkDf',width:100,sortable:true,hidden:false},
		            {header:'CJJNPXQK',dataIndex:'cjjnpxqk',width:100,sortable:true,hidden:false},
		            {header:'CJJNPXQK_DF',dataIndex:'cjjnpxqkDf',width:100,sortable:true,hidden:false},
		            {header:'ZYZQK',dataIndex:'zyzqk',width:100,sortable:true,hidden:false},
		            {header:'ZYZQK_DF',dataIndex:'zyzqkDf',width:100,sortable:true,hidden:false},
		            {header:'NYYE',dataIndex:'nyye',width:100,sortable:true,hidden:false},
		            {header:'NYYE_DF',dataIndex:'nyyeDf',width:100,sortable:true,hidden:false},
		            {header:'SCJYNL',dataIndex:'scjynl',width:100,sortable:true,hidden:false},
		            {header:'SCJYNL_DF',dataIndex:'scjynlDf',width:100,sortable:true,hidden:false},
		            {header:'SCJYQJ',dataIndex:'scjyqj',width:100,sortable:true,hidden:false},
		            {header:'SCJYQJ_DF',dataIndex:'scjyqjDf',width:100,sortable:true,hidden:false},
		            {header:'DKLS',dataIndex:'dkls',width:100,sortable:true,hidden:false},
		            {header:'DKLS_DF',dataIndex:'dklsDf',width:100,sortable:true,hidden:false},
		            {header:'BLXYJL',dataIndex:'blxyjl',width:100,sortable:true,hidden:false},
		            {header:'BLXYJL_DF',dataIndex:'blxyjlDf',width:100,sortable:true,hidden:false},
		            {header:'DKZYXS',dataIndex:'dkzyxs',width:100,sortable:true,hidden:false},
		            {header:'DKZYXS_DF',dataIndex:'dkzyxsDf',width:100,sortable:true,hidden:false},
		            {header:'NFAXFX',dataIndex:'nfaxfx',width:100,sortable:true,hidden:false},
		            {header:'NFAXFX_DF',dataIndex:'nfaxfxDf',width:100,sortable:true,hidden:false},
		            {header:'CJZYHZZZQK',dataIndex:'cjzyhzzzqk',width:100,sortable:true,hidden:false},
		            {header:'CJZYHZZZQK_DF',dataIndex:'cjzyhzzzqkDf',width:100,sortable:true,hidden:false},
		            {header:'CJMJZZQK',dataIndex:'cjmjzzqk',width:100,sortable:true,hidden:false},
		            {header:'CJMJZZQK_DF',dataIndex:'cjmjzzqkDf',width:100,sortable:true,hidden:false},
		            {header:'HDBZQK',dataIndex:'hdbzqk',width:100,sortable:true,hidden:false},
		            {header:'HDBZQK_DF',dataIndex:'hdbzqkDf',width:100,sortable:true,hidden:false},
		            {header:'WFZAGLQK',dataIndex:'wfzaglqk',width:100,sortable:true,hidden:false},
		            {header:'WFZAGLQK_DF',dataIndex:'wfzaglqkDf',width:100,sortable:true,hidden:false},
		            {header:'DDCWHPJ',dataIndex:'ddcwhpj',width:100,sortable:true,hidden:false},
		            {header:'DDCWHPJ_DF',dataIndex:'ddcwhpjDf',width:100,sortable:true,hidden:false},
		            {header:'DDXYHJ',dataIndex:'ddxyhj',width:100,sortable:true,hidden:false},
		            {header:'DDXYHJ_DF',dataIndex:'ddxyhjDf',width:100,sortable:true,hidden:false},
		            {header:'YWFZXW',dataIndex:'ywfzxw',width:100,sortable:true,hidden:false},
		            {header:'YWFZXW_DF',dataIndex:'ywfzxwDf',width:100,sortable:true,hidden:false},
		            {header:'REMARK',dataIndex:'remark',width:100,sortable:true,hidden:false},
		            {header:'创建人',dataIndex:'createUser',width:100,sortable:true,hidden:false},
		            {header:'创建时间',dataIndex:'createTime',width:100,sortable:true,hidden:false},
		            {header:'修改人',dataIndex:'updateUser',width:100,sortable:true,hidden:false},
		            {header:'修改时间',dataIndex:'updateTime',width:100,sortable:true,hidden:false}
		           ]);
		CpsFamilyPjjgGrid.superclass.constructor.call(this,{
			region: 'center',
			frame: true,
			height: height,
            viewConfig: {
                forceFit: false
            },
            loadMask: new Ext.LoadMask(document.body,{ 
				msg: '正在载入数据，请稍后...',
				store   : this.store
			}),
			sm: this.vsm,
			cm: this.vcm,
			tbar: this.vtbar,
			bbar: this.vbbar,
			ds: this.store
		});
	},
    onAddClick: function(){
    	if(!this.cpsFamilyPjjgWindow)
    		this.cpsFamilyPjjgWindow = new CpsFamilyPjjgWindow();
    	var win = this.cpsFamilyPjjgWindow;
		win.show();
		win.cpsFamilyPjjg.getForm().reset();
    },
    onModifyClick: function() {
    	var records = this.getSelectionModel().getSelections();
   		if(records.length > 0) {
   			if(records.length == 1){
   				vrecord = records[0];
   				
   				if(!this.cpsFamilyPjjgUpdateWindow)
					this.cpsFamilyPjjgUpdateWindow = new CpsFamilyPjjgUpdateWindow();
   				
   		    	var win = this.cpsFamilyPjjgUpdateWindow;
				var winForm = win.cpsFamilyPjjg;
				
				win.show();
							
   		    	winForm.pjjgId.setValue(vrecord.data['pjjgId']);
				winForm.familyId.setValue(vrecord.data.familyId);
				winForm.hynl.setValue(vrecord.data.hynl);
				winForm.hynlDf.setValue(vrecord.data.hynlDf);
				winForm.whcd.setValue(vrecord.data.whcd);
				winForm.whcdDf.setValue(vrecord.data.whcdDf);
				winForm.hyzk.setValue(vrecord.data.hyzk);
				winForm.hyzkDf.setValue(vrecord.data.hyzkDf);
				winForm.zfjg.setValue(vrecord.data.zfjg);
				winForm.zfjgDf.setValue(vrecord.data.zfjgDf);
				winForm.jtcysfjk.setValue(vrecord.data.jtcysfjk);
				winForm.jtcysfjkDf.setValue(vrecord.data.jtcysfjkDf);
				winForm.jthmqk.setValue(vrecord.data.jthmqk);
				winForm.jthmqkDf.setValue(vrecord.data.jthmqkDf);
				winForm.llhmqk.setValue(vrecord.data.llhmqk);
				winForm.llhmqkDf.setValue(vrecord.data.llhmqkDf);
				winForm.jtsrfzb.setValue(vrecord.data.jtsrfzb);
				winForm.jtsrfzbDf.setValue(vrecord.data.jtsrfzbDf);
				winForm.jtsrqk.setValue(vrecord.data.jtsrqk);
				winForm.jtsrqkDf.setValue(vrecord.data.jtsrqkDf);
				winForm.jtzcqk.setValue(vrecord.data.jtzcqk);
				winForm.jtzcqkDf.setValue(vrecord.data.jtzcqkDf);
				winForm.jtjsr.setValue(vrecord.data.jtjsr);
				winForm.jtjsrDf.setValue(vrecord.data.jtjsrDf);
				winForm.cjbxqk.setValue(vrecord.data.cjbxqk);
				winForm.cjbxqkDf.setValue(vrecord.data.cjbxqkDf);
				winForm.cjjnpxqk.setValue(vrecord.data.cjjnpxqk);
				winForm.cjjnpxqkDf.setValue(vrecord.data.cjjnpxqkDf);
				winForm.zyzqk.setValue(vrecord.data.zyzqk);
				winForm.zyzqkDf.setValue(vrecord.data.zyzqkDf);
				winForm.nyye.setValue(vrecord.data.nyye);
				winForm.nyyeDf.setValue(vrecord.data.nyyeDf);
				winForm.scjynl.setValue(vrecord.data.scjynl);
				winForm.scjynlDf.setValue(vrecord.data.scjynlDf);
				winForm.scjyqj.setValue(vrecord.data.scjyqj);
				winForm.scjyqjDf.setValue(vrecord.data.scjyqjDf);
				winForm.dkls.setValue(vrecord.data.dkls);
				winForm.dklsDf.setValue(vrecord.data.dklsDf);
				winForm.blxyjl.setValue(vrecord.data.blxyjl);
				winForm.blxyjlDf.setValue(vrecord.data.blxyjlDf);
				winForm.dkzyxs.setValue(vrecord.data.dkzyxs);
				winForm.dkzyxsDf.setValue(vrecord.data.dkzyxsDf);
				winForm.nfaxfx.setValue(vrecord.data.nfaxfx);
				winForm.nfaxfxDf.setValue(vrecord.data.nfaxfxDf);
				winForm.cjzyhzzzqk.setValue(vrecord.data.cjzyhzzzqk);
				winForm.cjzyhzzzqkDf.setValue(vrecord.data.cjzyhzzzqkDf);
				winForm.cjmjzzqk.setValue(vrecord.data.cjmjzzqk);
				winForm.cjmjzzqkDf.setValue(vrecord.data.cjmjzzqkDf);
				winForm.hdbzqk.setValue(vrecord.data.hdbzqk);
				winForm.hdbzqkDf.setValue(vrecord.data.hdbzqkDf);
				winForm.wfzaglqk.setValue(vrecord.data.wfzaglqk);
				winForm.wfzaglqkDf.setValue(vrecord.data.wfzaglqkDf);
				winForm.ddcwhpj.setValue(vrecord.data.ddcwhpj);
				winForm.ddcwhpjDf.setValue(vrecord.data.ddcwhpjDf);
				winForm.ddxyhj.setValue(vrecord.data.ddxyhj);
				winForm.ddxyhjDf.setValue(vrecord.data.ddxyhjDf);
				winForm.ywfzxw.setValue(vrecord.data.ywfzxw);
				winForm.ywfzxwDf.setValue(vrecord.data.ywfzxwDf);
				winForm.remark.setValue(vrecord.data.remark);
				winForm.createUser.setValue(vrecord.data.createUser);
				winForm.createTime.setValue(vrecord.data.createTime);
				winForm.updateUser.setValue(vrecord.data.updateUser);
				winForm.updateTime.setValue(vrecord.data.updateTime);
   		    	
   			}else{
   				Ext.Msg.alert('系统提示','不能修改多条记录！');
   			}
   		}else{
   			Ext.Msg.alert('系统提示','请选择一条记录！');
   		}    	
    },
    onDeleteClick: function(){
    	var records = this.getSelectionModel().getSelections();
    	var ids = {};
		var valueStr = [];
    	for(var i=0;i<records.length;i++){
    		valueStr.push(records[i].get('pjjgId'));
    	}
		ids['ids'] = valueStr;
		
    	if(records.length>0){
    		Ext.Msg.confirm('系统提示：',"确定删除这"+records.length+"条信息吗？",function(btn){
    			if(btn == 'yes'){
    				Ext.Ajax.request({
    					url: ENTITY_URL_DELETE,
    					method: 'POST',
    					params: ids,
    					success: function(form,action){
    						Ext.Msg.alert('系统提示','删除成功！');
    						cpsFamilyPjjgGrid.vbbar.doLoad(cpsFamilyPjjgGrid.vbbar.cursor);
    					},
    					failure: function(form,action){
							Ext.MessageBox.alert("系统提示：",action.result.message);
						}
    				});
    			}
    		});
    	}else{
    		Ext.Msg.alert('系统提示','请选择一条记录！');
    	}
    }
});

/*************onReady组件渲染处理***********************/
Ext.onReady(function(){
    Ext.QuickTips.init();                               //开启快速提示
    Ext.form.Field.prototype.msgTarget = 'side';        //提示方式"side"
    
    cpsFamilyPjjgGrid = new CpsFamilyPjjgGrid(Ext.getBody().getViewSize().height);
    cpsFamilyPjjgGrid.store.load({params:{start:0,limit:PAGESIZE}});
	new Ext.Viewport({
		layout: 'border',
		items: [
		        cpsFamilyPjjgGrid   
		]
	});
});

