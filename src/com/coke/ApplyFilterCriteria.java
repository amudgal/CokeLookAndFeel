/**
 * Created by Amit Mudgal (Senior Principal Consultant) 
 * Date : 5/18/2017
 * 
 *
 * Copyright © 2017 MicroStrategy Incorporated. All Rights Reserved.
 *
* MICROSTRATEGY MAKES NO REPRESENTATIONS OR WARRANTIES ABOUT THE 
 * SUITABILITY OF THIS SAMPLE CODE, EITHER EXPRESS OR IMPLIED, INCLUDING 
 * BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS 
 * FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. MICROSTRATEGY SHALL NOT 
 * BE LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING, 
 * MODIFYING OR DISTRIBUTING THIS SAMPLE CODE OR ITS DERIVATIVES.
 *
 *
 */
package com.coke;

import java.util.ResourceBundle;


import com.microstrategy.web.app.addons.AbstractAppAddOn;
import com.microstrategy.web.app.beans.PageComponent;
import com.microstrategy.web.beans.PromptsBean;
import com.microstrategy.web.beans.RWBean;
import com.microstrategy.web.beans.WebBeanException;
import com.microstrategy.web.objects.WebAttribute;
import com.microstrategy.web.objects.WebElement;
import com.microstrategy.web.objects.WebElements;
import com.microstrategy.web.objects.WebElementsObjectNode;
import com.microstrategy.web.objects.WebExpression;
import com.microstrategy.web.objects.WebExpressionPrompt;
import com.microstrategy.web.objects.WebObjectInfo;
import com.microstrategy.web.objects.WebObjectSource;
import com.microstrategy.web.objects.WebObjectsException;
import com.microstrategy.web.objects.WebObjectsFactory;
import com.microstrategy.web.objects.WebOperatorNode;
import com.microstrategy.web.objects.WebPrompt;
import com.microstrategy.web.objects.WebPrompts;
import com.microstrategy.web.objects.rw.RWInstance;
import com.microstrategy.web.platform.ContainerStringCollection;
import com.microstrategy.web.platform.GenericCookie;
import com.microstrategy.webapi.EnumDSSXMLExpressionType;
import com.microstrategy.webapi.EnumDSSXMLFunction;

public class ApplyFilterCriteria extends AbstractAppAddOn { 
    
    public String getAddOnDescription() {
        return "";
    }
    private static final String PROPERTIES_FILE_NAME = "resources/configuration";
    private static final String PROMPT_ID = "PROMPT_ID";
    private static final String LVL1_ATTRIBUTE_GUID = "LVL1_ATTRIBUTE_GUID";
    private static final String LVL2_ATTRIBUTE_GUID = "LVL2_ATTRIBUTE_GUID";
    private static final String LVL3_ATTRIBUTE_GUID = "LVL3_ATTRIBUTE_GUID";
    private static final String LVL4_ATTRIBUTE_GUID = "LVL4_ATTRIBUTE_GUID";
    
    public void preCollectData(PageComponent page) {
    	
    	page.getAppContext().getContainerServices().getCookie("");
    	ContainerStringCollection cookies = page.getAppContext().getContainerServices().getCookieStrings();
    	//Cookie Based Approach
    	for(int i=0; i<cookies.getNameCount(); i++){
    		System.out.println("Cookies: " +cookies.getName(i));
    		System.out.println("Value:" + cookies.getStringValue(cookies.getName(i)));
    	}
    	String SelectJson = "[ {'lvl':'1','sel':[{ 'id':'100','nm':'CCNA','acl':'Y','pl':'000'}]}, {'lvl':'2','sel':[{ 'id':'200','nm':'US Ops','acl':'Y','pl':'100' }, { 'id':'201','nm':'Fountain','acl':'Y','pl':'100' }, { 'id':'202','nm':'Warehouse','acl':'Y','pl':'100' }, { 'id':'203','nm':'VEB','acl':'Y','pl':'100' }, { 'id':'204','nm':'Canada','acl':'Y','pl':'100' }, { 'id':'205','nm':'Supply Chain','acl':'Y','pl':'100' }, { 'id':'206','nm':'Enabling Functions','acl':'Y','pl':'100' }, { 'id':'207','nm':'HQ','acl':'Y','pl':'100' }]}, {'lvl':'3','sel':[{ 'id':'300','nm':'Brands','acl':'Y','pl':'200' }, { 'id':'301','nm':'Strategic Marketing','acl':'Y','pl':'200'}, { 'id':'302','nm':'National Sales HQ','acl':'Y','pl':'200'}, { 'id':'303','nm':'Franchise & Commercial','acl':'Y','pl':'200'}, { 'id':'304','nm':'US Ops HQ','acl':'Y','pl':'200' }, { 'id':'305','nm':'CCNA PAC','acl':'Y','pl':'206' }, { 'id':'306','nm':'Latin Affairs','acl':'Y','pl':'206' }, { 'id':'307','nm':'CCNA HR','acl':'Y','pl':'206' }, { 'id':'308','nm':'CCNA IT','acl':'Y','pl':'206' }, { 'id':'309','nm':'CCNA Finance','acl':'Y','pl':'206' }, { 'id':'310','nm':'CCNA OOTP','acl':'Y','pl':'206' }, { 'id':'311','nm':'R&D','acl':'Y','pl':'206' }, { 'id':'312','nm':'Strategy','acl':'Y','pl':'206' }, { 'id':'313','nm':'Security','acl':'Y','pl':'206' }, { 'id':'314','nm':'NACG','acl':'Y','pl':'207' }, { 'id':'315','nm':'Corp Charges','acl':'Y','pl':'207' }, { 'id':'316','nm':'CCNA Group Charges','acl':'Y','pl':'207' }, { 'id':'317','nm':'NPSG','acl':'Y','pl':'207' } ]}, {'lvl':'4','sel':[{ 'id':'400','nm':'Sparkling','acl':'Y','pl':'300' }, { 'id':'401','nm':'Glaceau','acl':'Y','pl':'300' }, { 'id':'402','nm':'TeaCoffee','acl':'Y','pl':'300' }, { 'id':'403','nm':'Juice','acl':'Y','pl':'300' }, { 'id':'404','nm':'Still AO','acl':'Y','pl':'300' }]}, {'lvl':'5','sel':[{ 'id':'500','nm':'Coca-Cola Portfolio','acl':'Y','pl':'400' }, { 'id':'501','nm':'Sprite Flavors','acl':'Y','pl':'400' }, { 'id':'502','nm':'Sparkling HQAO','acl':'Y','pl':'400' }, { 'id':'503','nm':'Vitaminwater TM','acl':'Y','pl':'401' }, { 'id':'504','nm':'Smartwater TM','acl':'Y','pl':'401' }, { 'id':'505','nm':'Powerade TM','acl':'Y','pl':'401' }, { 'id':'506','nm':'Dasani TM','acl':'Y','pl':'401' }, { 'id':'507','nm':'Glaceau HQAO','acl':'Y','pl':'401' }, { 'id':'508','nm':'Total Tea','acl':'Y','pl':'402' }, { 'id':'509','nm':'Total Coffee','acl':'Y','pl':'402' }, { 'id':'510','nm':'TeaCoffee HQ','acl':'Y','pl':'402' }, { 'id':'511','nm':'Juice Juice Drink','acl':'Y','pl':'403' }, { 'id':'512','nm':'Juice HQ','acl':'Y','pl':'403' } ]}, {'lvl':'6','sel':[{ 'id':'600','nm':'Coke TM','acl':'Y','pl':'511' }, { 'id':'601','nm':'Diet Coke TM','acl':'Y','pl':'511' }, { 'id':'602','nm':'Coke Zero TM','acl':'Y','pl':'511' }, { 'id':'603','nm':'Sprite TM','acl':'Y','pl':'502' }, { 'id':'604','nm':'Fanta TM','acl':'Y','pl':'502' }, { 'id':'605','nm':'Seagrams TM','acl':'Y','pl':'502' }, { 'id':'606','nm':'AO Flavors','acl':'Y','pl':'502' }, { 'id':'607','nm':'Sparkling GPIE','acl':'Y','pl':'500' }, { 'id':'608','nm':'Sparkling HQ','acl':'Y','pl':'500' }, { 'id':'609','nm':'Vitaminwater Base','acl':'Y','pl':'503' }, { 'id':'610','nm':'Smartwater Base','acl':'Y','pl':'504' }, { 'id':'611','nm':'Powerade Base','acl':'Y','pl':'505' }, { 'id':'612','nm':'Dasani Base','acl':'Y','pl':'506' }, { 'id':'613','nm':'Glaceau Puerto Rico','acl':'Y','pl':'507' }, { 'id':'614','nm':'AO Water','acl':'Y','pl':'507' }, { 'id':'615','nm':'Glaceau AO','acl':'Y','pl':'507' }, { 'id':'616','nm':'Gold Peak TM','acl':'Y','pl':'509' }, { 'id':'617','nm':'Honest TM','acl':'Y','pl':'509' }, { 'id':'618','nm':'Fuze TM','acl':'Y','pl':'509' }, { 'id':'619','nm':'Dunkin TM','acl':'Y','pl':'510' }, { 'id':'620','nm':'AO Coffee','acl':'Y','pl':'510' }, { 'id':'621','nm':'MM Refreshment','acl':'Y','pl':'512' }, { 'id':'622','nm':'MM JTG','acl':'Y','pl':'512' }, { 'id':'623','nm':'MM Sparkling','acl':'Y','pl':'512' }, { 'id':'624','nm':'AO Juice','acl':'Y','pl':'512' } ]} ]";
    	GenericCookie OptionsJSON = page.getAppContext().getContainerServices().newCookie("Options", SelectJson);
        page.getAppContext().getContainerServices().addCookieToResponse(OptionsJSON);
    	// Get Values of Saved Session variables.
        String LVL1_PA = page.getAppContext().getContainerServices().getHeaderValue("LVL1");
        String LVL2_PA = page.getAppContext().getContainerServices().getHeaderValue("LVL2");
        String LVL3_PA = page.getAppContext().getContainerServices().getHeaderValue("LVL3");
        String LVL4_PA = page.getAppContext().getContainerServices().getHeaderValue("LVL4");
        /* Test Data ***********/
        LVL1_PA = "2015~2016";
        LVL2_PA = "2016 Q1~2016 Q2";
        LVL3_PA = "Feb 2016~Apr 2016~Mar 2016";
        LVL4_PA = "2/3/2016~4/5/2016"; 
    	RWBean rwb = (RWBean) page.getChildByClass(RWBean.class);
    	try {
    		WebObjectsFactory factory = page.getAppContext().getAppSessionManager().getActiveSession().getFactory();
    	    WebObjectSource oSource = factory.getObjectSource();
    		RWInstance rwbi = rwb.getRWInstance();
			if(rwbi.isPrompted()){
			  PromptsBean pbs = rwb.getPromptsBean();
			  WebPrompts prompts = pbs.getPrompts();
			  //System.out.println("prompt size: " +prompts.size());
			  ResourceBundle props = ResourceBundle.getBundle(PROPERTIES_FILE_NAME);
			  String PromptGUID = (String) props.getObject(PROMPT_ID);
			  String Lvl1_GUID = (String) props.getObject(LVL1_ATTRIBUTE_GUID);
			  String Lvl2_GUID = (String) props.getObject(LVL2_ATTRIBUTE_GUID);
			  String Lvl3_GUID = (String) props.getObject(LVL3_ATTRIBUTE_GUID);
			  String Lvl4_GUID = (String) props.getObject(LVL4_ATTRIBUTE_GUID);
			  for(int i=0;i<prompts.size();i++){
				  WebPrompt prompt = prompts.get(i);
				  //Match the prompt we need to populate.
                  if(PromptGUID.equalsIgnoreCase(prompt.getID())){
                	  //System.out.println("Good Hit" + prompt.getPromptType());
                	  WebExpressionPrompt expPrompt = (WebExpressionPrompt) prompt;  
                	  WebExpression exp = expPrompt.getAnswer();
                	  exp.clear();
                	  WebOperatorNode root = (WebOperatorNode) exp.getRootNode();
                	  root.setExpressionType(EnumDSSXMLExpressionType.DssXmlFilterBranchQual);
                      root.setFunction(EnumDSSXMLFunction.DssXmlFunctionAnd);
                      //Level 1 Hierarchy
                      WebOperatorNode branchoperator1 = exp.createOperatorNode(EnumDSSXMLExpressionType.DssXmlFilterListQual,
                    		  EnumDSSXMLFunction.DssXmlFunctionIn);
                      PopulatePrompts(Lvl1_GUID,oSource,branchoperator1,exp,LVL1_PA);
                      //Level 2 Hierarchy
                      WebOperatorNode branchoperator2 = exp.createOperatorNode(EnumDSSXMLExpressionType.DssXmlFilterListQual,
                    		  EnumDSSXMLFunction.DssXmlFunctionIn);
                      PopulatePrompts(Lvl2_GUID,oSource,branchoperator2,exp,LVL2_PA);
                      //Level 3 Hierarchy
                      WebOperatorNode branchoperator3 = exp.createOperatorNode(EnumDSSXMLExpressionType.DssXmlFilterListQual,
                    		  EnumDSSXMLFunction.DssXmlFunctionIn);
                      PopulatePrompts(Lvl3_GUID,oSource,branchoperator3,exp,LVL3_PA);
                      //Level 4 Hierarchy
                      WebOperatorNode branchoperator4 = exp.createOperatorNode(EnumDSSXMLExpressionType.DssXmlFilterListQual,
                    		  EnumDSSXMLFunction.DssXmlFunctionIn);
                      PopulatePrompts(Lvl4_GUID,oSource,branchoperator4,exp,LVL4_PA);
                      expPrompt.setAnswer(exp);                  
                      prompt.answerPrompt();
                  }
			  }
			}
		} catch (WebObjectsException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (WebBeanException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	super.preCollectData(page);
    }
    
    public static void PopulatePrompts(String LevelGUID, WebObjectSource oSource,WebOperatorNode branchoperator,
    		WebExpression exp,String LVLX_PA ){
    	WebObjectInfo oLvlX;
		try {
			oLvlX = oSource.getObject(LevelGUID,12,true);
	        WebAttribute Hier_LvlX_Att = (WebAttribute)oLvlX;
	        exp.createShortcutNode(Hier_LvlX_Att,branchoperator );
            WebElementsObjectNode elementsNode = exp.createElementsObjectNode(Hier_LvlX_Att, branchoperator);
            Hier_LvlX_Att.populate();
            WebElements elements = Hier_LvlX_Att.getElementSource().getElements();
            WebElement element = null;
            for(int elem=0;elem<elements.size();elem++){
                element = elements.get(elem);
                if (LVLX_PA.contains(element.getDisplayName())){ 
                   elementsNode.getElements().add(element.getElementID(), element.getDisplayName());
                }
            }
		} catch (WebObjectsException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    }


}