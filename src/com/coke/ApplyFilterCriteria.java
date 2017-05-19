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
import com.microstrategy.web.objects.WebDocumentInstance;
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

    	System.out.println("Inside PreCollect");
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
                  if(PromptGUID.equalsIgnoreCase(prompt.getID())){
                	  System.out.println("Positive Hit" + prompt.getPromptType());
                	  WebExpressionPrompt expPrompt = (WebExpressionPrompt) prompt;  
                	  WebExpression exp = expPrompt.getAnswer();
                	  exp.clear();
                	  WebOperatorNode root = (WebOperatorNode) exp.getRootNode();
                	  root.setExpressionType(EnumDSSXMLExpressionType.DssXmlFilterBranchQual);
                      root.setFunction(EnumDSSXMLFunction.DssXmlFunctionAnd);
                      WebOperatorNode leftbranchoperator = exp.createOperatorNode(EnumDSSXMLExpressionType.DssXmlFilterListQual,
                    		  EnumDSSXMLFunction.DssXmlFunctionIn);
                      //Level 1 Hierarchy
                      WebObjectInfo oLvl1 = oSource.getObject(Lvl1_GUID,12,true);
                      WebAttribute Hier_Lvl1_Att = (WebAttribute)oLvl1;
                      exp.createShortcutNode(Hier_Lvl1_Att,leftbranchoperator );
                      WebElementsObjectNode elementsNode = exp.createElementsObjectNode(Hier_Lvl1_Att, leftbranchoperator);
                      Hier_Lvl1_Att.populate();
                      WebElements elements = Hier_Lvl1_Att.getElementSource().getElements();
                      
                      WebElement element = null;
                      for(int elem=0;elem<elements.size();elem++){
                          element = elements.get(elem);
                          System.out.println(element.getDisplayName());
                          if (element.getDisplayName().equalsIgnoreCase("2015")){ 
                        	 System.out.println("Inside addition");
                             elementsNode.getElements().add(element.getElementID(), element.getDisplayName());
                          }
                      }
                  //    expPrompt.setAnswer(exp);                  
                  //    prompt.answerPrompt();
                      
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
    
    

   

}