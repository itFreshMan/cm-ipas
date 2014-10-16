package com.unteck.cps.web.family.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Embeddable;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;

import org.hibernate.annotations.GenericGenerator;



/**
 * CPS_FAMILY_PJJG
 * @author 
 * @since  2014-10-09
 */
@Entity
@Table(name="CPS_FAMILY_PJJG")
public class CpsFamilyPjjg implements Serializable{
	
	/**PJJG_ID*/
	private Long pjjgId;
	
	/**FAMILY_ID*/
	private Integer familyId;
	
	/**按户主“20岁以下、20（含）岁—30岁、30岁（含）—50岁、50岁（含）—60岁,60岁以上”5个年龄段分别给予“0、1、2、1、0.5”
的分值*/
	private String hynl;
	
	/**HYNL_DF*/
	private Double hynlDf;
	
	/**WHCD*/
	private String whcd;
	
	/**WHCD_DF*/
	private Double whcdDf;
	
	/**HYZK*/
	private String hyzk;
	
	/**HYZK_DF*/
	private Double hyzkDf;
	
	/**ZFJG*/
	private String zfjg;
	
	/**ZFJG_DF*/
	private Double zfjgDf;
	
	/**JTCYSFJK*/
	private String jtcysfjk;
	
	/**JTCYSFJK_DF*/
	private Double jtcysfjkDf;
	
	/**JTHMQK*/
	private String jthmqk;
	
	/**JTHMQK_DF*/
	private Double jthmqkDf;
	
	/**LLHMQK*/
	private String llhmqk;
	
	/**LLHMQK_DF*/
	private Double llhmqkDf;
	
	/**JTSRFZB*/
	private String jtsrfzb;
	
	/**JTSRFZB_DF*/
	private Double jtsrfzbDf;
	
	/**JTSRQK*/
	private String jtsrqk;
	
	/**JTSRQK_DF*/
	private Double jtsrqkDf;
	
	/**JTZCQK*/
	private String jtzcqk;
	
	/**JTZCQK_DF*/
	private Double jtzcqkDf;
	
	/**JTJSR*/
	private String jtjsr;
	
	/**JTJSR_DF*/
	private Double jtjsrDf;
	
	/**CJBXQK*/
	private String cjbxqk;
	
	/**CJBXQK_DF*/
	private Double cjbxqkDf;
	
	/**CJJNPXQK*/
	private String cjjnpxqk;
	
	/**CJJNPXQK_DF*/
	private Double cjjnpxqkDf;
	
	/**ZYZQK*/
	private String zyzqk;
	
	/**ZYZQK_DF*/
	private Double zyzqkDf;
	
	/**NYYE*/
	private String nyye;
	
	/**NYYE_DF*/
	private Double nyyeDf;
	
	/**SCJYNL*/
	private String scjynl;
	
	/**SCJYNL_DF*/
	private Double scjynlDf;
	
	/**SCJYQJ*/
	private String scjyqj;
	
	/**SCJYQJ_DF*/
	private Double scjyqjDf;
	
	/**DKLS*/
	private String dkls;
	
	/**DKLS_DF*/
	private Double dklsDf;
	
	/**BLXYJL*/
	private String blxyjl;
	
	/**BLXYJL_DF*/
	private Double blxyjlDf;
	
	/**DKZYXS*/
	private String dkzyxs;
	
	/**DKZYXS_DF*/
	private Double dkzyxsDf;
	
	/**NFAXFX*/
	private String nfaxfx;
	
	/**NFAXFX_DF*/
	private Double nfaxfxDf;
	
	/**CJZYHZZZQK*/
	private String cjzyhzzzqk;
	
	/**CJZYHZZZQK_DF*/
	private Double cjzyhzzzqkDf;
	
	/**CJMJZZQK*/
	private String cjmjzzqk;
	
	/**CJMJZZQK_DF*/
	private Double cjmjzzqkDf;
	
	/**HDBZQK*/
	private String hdbzqk;
	
	/**HDBZQK_DF*/
	private Double hdbzqkDf;
	
	/**WFZAGLQK*/
	private String wfzaglqk;
	
	/**WFZAGLQK_DF*/
	private Double wfzaglqkDf;
	
	/**DDCWHPJ*/
	private String ddcwhpj;
	
	/**DDCWHPJ_DF*/
	private Double ddcwhpjDf;
	
	/**DDXYHJ*/
	private String ddxyhj;
	
	/**DDXYHJ_DF*/
	private Double ddxyhjDf;
	
	/**YWFZXW*/
	private String ywfzxw;
	
	/**YWFZXW_DF*/
	private Double ywfzxwDf;
	
	/**REMARK*/
	private String remark;
	
	/**创建人*/
	private Integer createUser;
	
	/**创建时间*/
	private java.util.Date createTime;
	
	/**修改人*/
	private Integer updateUser;
	
	/**修改时间*/
	private java.util.Date updateTime;
	
	@Id
    @GeneratedValue(generator = "tableGenerator")     
    @GenericGenerator(name = "tableGenerator", strategy="com.unteck.common.dao.key.SequenceGenerator")
    @Column(name="PJJG_ID", length=19, nullable=false)
	public Long getPjjgId() {
		return pjjgId;
	}
	
	public void setPjjgId(Long pjjgId) {
		this.pjjgId = pjjgId;
	}
	
	@Column(name="FAMILY_ID", length=10, nullable=true)
	public Integer getFamilyId() {
		return familyId;
	}
	
	public void setFamilyId(Integer familyId) {
		this.familyId = familyId;
	}
	
	@Column(name="HYNL", length=100, nullable=true)
	public String getHynl() {
		return hynl;
	}
	
	public void setHynl(String hynl) {
		this.hynl = hynl;
	}
	
	@Column(name="HYNL_DF", length=53, nullable=true)
	public Double getHynlDf() {
		return hynlDf;
	}
	
	public void setHynlDf(Double hynlDf) {
		this.hynlDf = hynlDf;
	}
	
	@Column(name="WHCD", length=100, nullable=true)
	public String getWhcd() {
		return whcd;
	}
	
	public void setWhcd(String whcd) {
		this.whcd = whcd;
	}
	
	@Column(name="WHCD_DF", length=53, nullable=true)
	public Double getWhcdDf() {
		return whcdDf;
	}
	
	public void setWhcdDf(Double whcdDf) {
		this.whcdDf = whcdDf;
	}
	
	@Column(name="HYZK", length=100, nullable=true)
	public String getHyzk() {
		return hyzk;
	}
	
	public void setHyzk(String hyzk) {
		this.hyzk = hyzk;
	}
	
	@Column(name="HYZK_DF", length=53, nullable=true)
	public Double getHyzkDf() {
		return hyzkDf;
	}
	
	public void setHyzkDf(Double hyzkDf) {
		this.hyzkDf = hyzkDf;
	}
	
	@Column(name="ZFJG", length=100, nullable=true)
	public String getZfjg() {
		return zfjg;
	}
	
	public void setZfjg(String zfjg) {
		this.zfjg = zfjg;
	}
	
	@Column(name="ZFJG_DF", length=53, nullable=true)
	public Double getZfjgDf() {
		return zfjgDf;
	}
	
	public void setZfjgDf(Double zfjgDf) {
		this.zfjgDf = zfjgDf;
	}
	
	@Column(name="JTCYSFJK", length=100, nullable=true)
	public String getJtcysfjk() {
		return jtcysfjk;
	}
	
	public void setJtcysfjk(String jtcysfjk) {
		this.jtcysfjk = jtcysfjk;
	}
	
	@Column(name="JTCYSFJK_DF", length=53, nullable=true)
	public Double getJtcysfjkDf() {
		return jtcysfjkDf;
	}
	
	public void setJtcysfjkDf(Double jtcysfjkDf) {
		this.jtcysfjkDf = jtcysfjkDf;
	}
	
	@Column(name="JTHMQK", length=100, nullable=true)
	public String getJthmqk() {
		return jthmqk;
	}
	
	public void setJthmqk(String jthmqk) {
		this.jthmqk = jthmqk;
	}
	
	@Column(name="JTHMQK_DF", length=53, nullable=true)
	public Double getJthmqkDf() {
		return jthmqkDf;
	}
	
	public void setJthmqkDf(Double jthmqkDf) {
		this.jthmqkDf = jthmqkDf;
	}
	
	@Column(name="LLHMQK", length=100, nullable=true)
	public String getLlhmqk() {
		return llhmqk;
	}
	
	public void setLlhmqk(String llhmqk) {
		this.llhmqk = llhmqk;
	}
	
	@Column(name="LLHMQK_DF", length=53, nullable=true)
	public Double getLlhmqkDf() {
		return llhmqkDf;
	}
	
	public void setLlhmqkDf(Double llhmqkDf) {
		this.llhmqkDf = llhmqkDf;
	}
	
	@Column(name="JTSRFZB", length=100, nullable=true)
	public String getJtsrfzb() {
		return jtsrfzb;
	}
	
	public void setJtsrfzb(String jtsrfzb) {
		this.jtsrfzb = jtsrfzb;
	}
	
	@Column(name="JTSRFZB_DF", length=53, nullable=true)
	public Double getJtsrfzbDf() {
		return jtsrfzbDf;
	}
	
	public void setJtsrfzbDf(Double jtsrfzbDf) {
		this.jtsrfzbDf = jtsrfzbDf;
	}
	
	@Column(name="JTSRQK", length=100, nullable=true)
	public String getJtsrqk() {
		return jtsrqk;
	}
	
	public void setJtsrqk(String jtsrqk) {
		this.jtsrqk = jtsrqk;
	}
	
	@Column(name="JTSRQK_DF", length=53, nullable=true)
	public Double getJtsrqkDf() {
		return jtsrqkDf;
	}
	
	public void setJtsrqkDf(Double jtsrqkDf) {
		this.jtsrqkDf = jtsrqkDf;
	}
	
	@Column(name="JTZCQK", length=100, nullable=true)
	public String getJtzcqk() {
		return jtzcqk;
	}
	
	public void setJtzcqk(String jtzcqk) {
		this.jtzcqk = jtzcqk;
	}
	
	@Column(name="JTZCQK_DF", length=53, nullable=true)
	public Double getJtzcqkDf() {
		return jtzcqkDf;
	}
	
	public void setJtzcqkDf(Double jtzcqkDf) {
		this.jtzcqkDf = jtzcqkDf;
	}
	
	@Column(name="JTJSR", length=100, nullable=true)
	public String getJtjsr() {
		return jtjsr;
	}
	
	public void setJtjsr(String jtjsr) {
		this.jtjsr = jtjsr;
	}
	
	@Column(name="JTJSR_DF", length=53, nullable=true)
	public Double getJtjsrDf() {
		return jtjsrDf;
	}
	
	public void setJtjsrDf(Double jtjsrDf) {
		this.jtjsrDf = jtjsrDf;
	}
	
	@Column(name="CJBXQK", length=100, nullable=true)
	public String getCjbxqk() {
		return cjbxqk;
	}
	
	public void setCjbxqk(String cjbxqk) {
		this.cjbxqk = cjbxqk;
	}
	
	@Column(name="CJBXQK_DF", length=53, nullable=true)
	public Double getCjbxqkDf() {
		return cjbxqkDf;
	}
	
	public void setCjbxqkDf(Double cjbxqkDf) {
		this.cjbxqkDf = cjbxqkDf;
	}
	
	@Column(name="CJJNPXQK", length=100, nullable=true)
	public String getCjjnpxqk() {
		return cjjnpxqk;
	}
	
	public void setCjjnpxqk(String cjjnpxqk) {
		this.cjjnpxqk = cjjnpxqk;
	}
	
	@Column(name="CJJNPXQK_DF", length=53, nullable=true)
	public Double getCjjnpxqkDf() {
		return cjjnpxqkDf;
	}
	
	public void setCjjnpxqkDf(Double cjjnpxqkDf) {
		this.cjjnpxqkDf = cjjnpxqkDf;
	}
	
	@Column(name="ZYZQK", length=100, nullable=true)
	public String getZyzqk() {
		return zyzqk;
	}
	
	public void setZyzqk(String zyzqk) {
		this.zyzqk = zyzqk;
	}
	
	@Column(name="ZYZQK_DF", length=53, nullable=true)
	public Double getZyzqkDf() {
		return zyzqkDf;
	}
	
	public void setZyzqkDf(Double zyzqkDf) {
		this.zyzqkDf = zyzqkDf;
	}
	
	@Column(name="NYYE", length=100, nullable=true)
	public String getNyye() {
		return nyye;
	}
	
	public void setNyye(String nyye) {
		this.nyye = nyye;
	}
	
	@Column(name="NYYE_DF", length=53, nullable=true)
	public Double getNyyeDf() {
		return nyyeDf;
	}
	
	public void setNyyeDf(Double nyyeDf) {
		this.nyyeDf = nyyeDf;
	}
	
	@Column(name="SCJYNL", length=100, nullable=true)
	public String getScjynl() {
		return scjynl;
	}
	
	public void setScjynl(String scjynl) {
		this.scjynl = scjynl;
	}
	
	@Column(name="SCJYNL_DF", length=53, nullable=true)
	public Double getScjynlDf() {
		return scjynlDf;
	}
	
	public void setScjynlDf(Double scjynlDf) {
		this.scjynlDf = scjynlDf;
	}
	
	@Column(name="SCJYQJ", length=100, nullable=true)
	public String getScjyqj() {
		return scjyqj;
	}
	
	public void setScjyqj(String scjyqj) {
		this.scjyqj = scjyqj;
	}
	
	@Column(name="SCJYQJ_DF", length=53, nullable=true)
	public Double getScjyqjDf() {
		return scjyqjDf;
	}
	
	public void setScjyqjDf(Double scjyqjDf) {
		this.scjyqjDf = scjyqjDf;
	}
	
	@Column(name="DKLS", length=100, nullable=true)
	public String getDkls() {
		return dkls;
	}
	
	public void setDkls(String dkls) {
		this.dkls = dkls;
	}
	
	@Column(name="DKLS_DF", length=53, nullable=true)
	public Double getDklsDf() {
		return dklsDf;
	}
	
	public void setDklsDf(Double dklsDf) {
		this.dklsDf = dklsDf;
	}
	
	@Column(name="BLXYJL", length=100, nullable=true)
	public String getBlxyjl() {
		return blxyjl;
	}
	
	public void setBlxyjl(String blxyjl) {
		this.blxyjl = blxyjl;
	}
	
	@Column(name="BLXYJL_DF", length=53, nullable=true)
	public Double getBlxyjlDf() {
		return blxyjlDf;
	}
	
	public void setBlxyjlDf(Double blxyjlDf) {
		this.blxyjlDf = blxyjlDf;
	}
	
	@Column(name="DKZYXS", length=100, nullable=true)
	public String getDkzyxs() {
		return dkzyxs;
	}
	
	public void setDkzyxs(String dkzyxs) {
		this.dkzyxs = dkzyxs;
	}
	
	@Column(name="DKZYXS_DF", length=53, nullable=true)
	public Double getDkzyxsDf() {
		return dkzyxsDf;
	}
	
	public void setDkzyxsDf(Double dkzyxsDf) {
		this.dkzyxsDf = dkzyxsDf;
	}
	
	@Column(name="NFAXFX", length=100, nullable=true)
	public String getNfaxfx() {
		return nfaxfx;
	}
	
	public void setNfaxfx(String nfaxfx) {
		this.nfaxfx = nfaxfx;
	}
	
	@Column(name="NFAXFX_DF", length=53, nullable=true)
	public Double getNfaxfxDf() {
		return nfaxfxDf;
	}
	
	public void setNfaxfxDf(Double nfaxfxDf) {
		this.nfaxfxDf = nfaxfxDf;
	}
	
	@Column(name="CJZYHZZZQK", length=100, nullable=true)
	public String getCjzyhzzzqk() {
		return cjzyhzzzqk;
	}
	
	public void setCjzyhzzzqk(String cjzyhzzzqk) {
		this.cjzyhzzzqk = cjzyhzzzqk;
	}
	
	@Column(name="CJZYHZZZQK_DF", length=53, nullable=true)
	public Double getCjzyhzzzqkDf() {
		return cjzyhzzzqkDf;
	}
	
	public void setCjzyhzzzqkDf(Double cjzyhzzzqkDf) {
		this.cjzyhzzzqkDf = cjzyhzzzqkDf;
	}
	
	@Column(name="CJMJZZQK", length=100, nullable=true)
	public String getCjmjzzqk() {
		return cjmjzzqk;
	}
	
	public void setCjmjzzqk(String cjmjzzqk) {
		this.cjmjzzqk = cjmjzzqk;
	}
	
	@Column(name="CJMJZZQK_DF", length=53, nullable=true)
	public Double getCjmjzzqkDf() {
		return cjmjzzqkDf;
	}
	
	public void setCjmjzzqkDf(Double cjmjzzqkDf) {
		this.cjmjzzqkDf = cjmjzzqkDf;
	}
	
	@Column(name="HDBZQK", length=100, nullable=true)
	public String getHdbzqk() {
		return hdbzqk;
	}
	
	public void setHdbzqk(String hdbzqk) {
		this.hdbzqk = hdbzqk;
	}
	
	@Column(name="HDBZQK_DF", length=53, nullable=true)
	public Double getHdbzqkDf() {
		return hdbzqkDf;
	}
	
	public void setHdbzqkDf(Double hdbzqkDf) {
		this.hdbzqkDf = hdbzqkDf;
	}
	
	@Column(name="WFZAGLQK", length=100, nullable=true)
	public String getWfzaglqk() {
		return wfzaglqk;
	}
	
	public void setWfzaglqk(String wfzaglqk) {
		this.wfzaglqk = wfzaglqk;
	}
	
	@Column(name="WFZAGLQK_DF", length=53, nullable=true)
	public Double getWfzaglqkDf() {
		return wfzaglqkDf;
	}
	
	public void setWfzaglqkDf(Double wfzaglqkDf) {
		this.wfzaglqkDf = wfzaglqkDf;
	}
	
	@Column(name="DDCWHPJ", length=100, nullable=true)
	public String getDdcwhpj() {
		return ddcwhpj;
	}
	
	public void setDdcwhpj(String ddcwhpj) {
		this.ddcwhpj = ddcwhpj;
	}
	
	@Column(name="DDCWHPJ_DF", length=53, nullable=true)
	public Double getDdcwhpjDf() {
		return ddcwhpjDf;
	}
	
	public void setDdcwhpjDf(Double ddcwhpjDf) {
		this.ddcwhpjDf = ddcwhpjDf;
	}
	
	@Column(name="DDXYHJ", length=100, nullable=true)
	public String getDdxyhj() {
		return ddxyhj;
	}
	
	public void setDdxyhj(String ddxyhj) {
		this.ddxyhj = ddxyhj;
	}
	
	@Column(name="DDXYHJ_DF", length=53, nullable=true)
	public Double getDdxyhjDf() {
		return ddxyhjDf;
	}
	
	public void setDdxyhjDf(Double ddxyhjDf) {
		this.ddxyhjDf = ddxyhjDf;
	}
	
	@Column(name="YWFZXW", length=100, nullable=true)
	public String getYwfzxw() {
		return ywfzxw;
	}
	
	public void setYwfzxw(String ywfzxw) {
		this.ywfzxw = ywfzxw;
	}
	
	@Column(name="YWFZXW_DF", length=53, nullable=true)
	public Double getYwfzxwDf() {
		return ywfzxwDf;
	}
	
	public void setYwfzxwDf(Double ywfzxwDf) {
		this.ywfzxwDf = ywfzxwDf;
	}
	
	@Column(name="REMARK", length=512, nullable=true)
	public String getRemark() {
		return remark;
	}
	
	public void setRemark(String remark) {
		this.remark = remark;
	}
	
	@Column(name="CREATE_USER", length=10, nullable=true)
	public Integer getCreateUser() {
		return createUser;
	}
	
	public void setCreateUser(Integer createUser) {
		this.createUser = createUser;
	}
	
	@Column(name="CREATE_TIME", length=26, nullable=true)
	public java.util.Date getCreateTime() {
		return createTime;
	}
	
	public void setCreateTime(java.util.Date createTime) {
		this.createTime = createTime;
	}
	
	@Column(name="UPDATE_USER", length=10, nullable=true)
	public Integer getUpdateUser() {
		return updateUser;
	}
	
	public void setUpdateUser(Integer updateUser) {
		this.updateUser = updateUser;
	}
	
	@Column(name="UPDATE_TIME", length=26, nullable=true)
	public java.util.Date getUpdateTime() {
		return updateTime;
	}
	
	public void setUpdateTime(java.util.Date updateTime) {
		this.updateTime = updateTime;
	}
	
}
