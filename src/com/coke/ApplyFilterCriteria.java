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
    	// Get Values of Saved Session variables.
        String LVL1_PA = page.getAppContext().getContainerServices().getHeaderValue("LVL1");
        String LVL2_PA = page.getAppContext().getContainerServices().getHeaderValue("LVL2");
        String LVL3_PA = page.getAppContext().getContainerServices().getHeaderValue("LVL3");
        String LVL4_PA = page.getAppContext().getContainerServices().getHeaderValue("LVL4");
        /* Test Data ***********
        LVL1_PA = "2015~2016";
        LVL2_PA = "2016 Q1~2016 Q2";
        LVL3_PA = "Feb 2016~Apr 2016~Mar 2016";
        LVL4_PA = "2/3/2016~4/5/2016"; */
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